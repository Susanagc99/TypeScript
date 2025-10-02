// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../../lib/dbconnection";
import Properties from "../../database/models/properties";

interface Property {
    _id: string;
    name: string;
    value: number;
    img?: string;
}

type GetResponse = { ok: true; data: Property[] };
type PostResponse = { ok: true; message: string; createdId?: string };
type PutResponse = { ok: true; message: string; updatedId?: string };
type DeleteResponse = { ok: true; message: string; deletedId?: string };
type ErrorResponse = { ok: false; error: string };

type ResponseBody =
    | GetResponse
    | PostResponse
    | PutResponse
    | DeleteResponse
    | ErrorResponse;

const allowed = ["GET", "POST", "PUT", "DELETE"];


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseBody>,
) {

    try {

        if (!allowed.includes(req.method!)) {
            res.setHeader("Allow", allowed);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }

        dbConnection()

        if (req.method === "GET") {
            const data = await Properties.find()

            res.status(200).json({
                ok: true,
                data: data as Property[]
            });
        }

        if (req.method === 'POST') {

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

        if (req.method === 'PUT') {

            const { id, name, value, img } = req.body

            try {
                const propertyUpdate = await Properties.findByIdAndUpdate(
                    id, { name, value, img }, { new: true });
                console.log(propertyUpdate);
            } catch {
                res.status(400)
            }

            res
                .status(200)
                .json({ ok: true, message: "Property updated", updatedId: id });
        }

        if (req.method === "DELETE") {
            const { id } = req.query;
            console.log(id);

            await Properties.findByIdAndDelete(id);

            res
                .status(200)
                .json({ ok: true, message: "property deleted", deletedId: `${id}`});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ok: false, error: "Internal server error"});
    }
}



