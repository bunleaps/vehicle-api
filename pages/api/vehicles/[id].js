// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { carData } from "../car";

export default function getVehicleById(req, res) {
  res
    .status(200)
    .json(
      !carData[req.query.id - 1]
        ? { message: "Sorry: Query not found!" }
        : carData[req.query.id - 1]
    );
}
