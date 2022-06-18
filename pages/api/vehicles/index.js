import { carData } from "../car";

console.log(carData.length);

export default function getAllVehicles(req, res) {
  res.status(200).json(carData);
}
