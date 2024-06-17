import OverallStat from "../models/overralstat.js";
export const getsales = async (req, res) => {
  try {
    const find = await OverallStat.find();
    const get = find[0];
    res.status(200).json(get);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
