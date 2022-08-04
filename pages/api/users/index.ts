import {NextApiRequest, NextApiResponse} from "next";

type Data = {
    id: number,
    name: string
}

const users: Data[] = [
    {
        id: 1,
        name: "Teo"
    },
    {
        id: 2,
        name: "Tam"
    }
]

export default function List(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json(users)
}
