import { eventsTable } from "../../utils/Airtable";

export default async (_req, res) => {
  try {
    const records = await eventsTable.select({}).firstPage();
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};
