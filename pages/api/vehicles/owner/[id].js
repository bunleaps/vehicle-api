// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { carData } from "../../car";
import { data } from "../../data";

export default function getVehicleById(req, res) {
  const Car = carData.filter((carData) => carData.ownerId == req.query.id);
  res.status(200).json([data[req.query.id - 1], Car]);
}
