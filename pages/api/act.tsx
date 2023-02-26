import { actsTable } from "../../utils/Airtable";

const act = async (req, res) => {
  const { id } = req.query;
  try {
    const act = await actsTable.find(id, (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      return act;
    });
    res.status(200).json(act);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};
export default act;
