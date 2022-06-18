// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "../data";

export default function getPersonById(req, res) {
  res
    .status(200)
    .json(
      !data[req.query.id - 1]
        ? { message: "Sorry: Query not found!" }
        : data[req.query.id - 1]
    );
}
