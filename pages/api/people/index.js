import { data } from "../data";

export default function getAllPeople(req, res) {
  res.status(200).json(data);
}
