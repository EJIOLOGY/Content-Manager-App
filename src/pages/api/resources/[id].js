import axios from "axios";

export default async (req, res) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  if (method === "PATCH") {
    try {
      const axiosRes = await axios.patch(
        `${process.env.API_URL}/resources/${id}`,
        body
      );
      return res.status(200).json(axiosRes.data);
    } catch (error) {
      return res.status(422).send("Data could not be saved!");
    }
  } else if (method === "GET") {
    try {
      const axiosRes = await axios.get(
        `${process.env.API_URL}/resources/${id}`
      );
      return res.status(200).json(axiosRes.data);
    } catch (error) {
      return res.status(404).send("Resource not found!");
    }
  }

  res.setHeader("Allow", ["PATCH", "GET"]);
  res.status(405).end(`Method ${method} Not Allowed`);
};
