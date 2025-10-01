// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../../lib/dbconnection";
import Properties from "../../database/models/properties";


type Data = {
    message: string;
};

interface Property {
    _id: string;
    name: string;
    value: number;
    img?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {

    try {

        dbConnection()

        if (req.method === "GET") {
            const data = await Properties.find()

            res.status(200).json({
                ok: true,
                data: data as Property[]
            });
        }

        else if (req.method === 'POST') {

            const { name, value, img } = req.body
            const newProperty = new Properties({
                name, value, img
            })

            const savedProperty = await newProperty.save()

            console.log(savedProperty)

            return res.status(201).json({
                ok: true,
                message: "property saved",
                createdId: savedProperty._id
            });
        }

        else if (req.method === 'PUT') {

            const { id, name, value, img } = req.body

            try {
                const propertyUpdate = await Properties.findByIdAndUpdate(
                    id, {name, value, img}, { new: true });
                console.log(propertyUpdate);
            } catch {
                res.status(400)
            }

            res
                .status(200)
                .json({
                    ok: true,
                    message: "Property updated",
                    updateId: id,
                });
        }

        else if (req.method === "DELETE") {

            const { id } = req.query;

            const deletedProperty = await Properties.findByIdAndDelete(id);

            console.log(deletedProperty)

            return res.status(200).json({
                ok: true,
                message: "Property deleted",
                deletedId: id,
            })
        }


        else {
            res.status(500).json({ message: "método no permitido" })
        }
    } catch (err) {
        res.status(500).json({ message: "fallo", error: err })
    }
};

