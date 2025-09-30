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

        if (req.method === "GET") {
            dbConnection()
            const data = await Properties.find()
            console.log(data)

            res.status(200).json({
                ok: true,
                data: data as Property[]
            });
        }

        else if (req.method === 'POST') {
            res.status(200).json({ message: "funciona el post" });
        }

        else if (req.method === 'PUT') {
            res.status(200).json({ message: "funciona el put" });
        }

        else if (req.method === 'DELETE') {
            res.status(200).json({ message: "funciona el delete" });
        }

        else {
            res.status(500).json({ message: "método no permitido" })
        }
    } catch (err) {
        res.status(500).json({ message: "fallo", error: err })
    }
};

