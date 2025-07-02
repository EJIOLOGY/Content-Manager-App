import axios from "axios";
export default async (req, res) => {
  if (req.method === "GET") {
    const dataRes = await fetch(`${process.env.API_URL}/resources`);
    const data = await dataRes.json();
    console.log("data", data);
    return res.send(data);
  }
  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    let url = `${process.env.API_URL}/resources`;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data's are missing!");
    }

    if (req.method === "PATCH") {
      url += `/${id}`;
    }
    try {
      // Validate the URL
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiosRes.data);
    } catch (error) {
      return res.status(422).send("Data could not be saved!");
    }
  }
  // Handle unsupported methods
  res.setHeader("Allow", ["GET", "POST", "PATCH"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};
