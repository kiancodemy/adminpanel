import { Product } from "../models/product.js";
import { Productstat } from "../models/productstat.js";
import Transaction from "../models/transactions.js";
export const getproucts = async (req, res) => {
  try {
    const find = await Product.find();
    if (!find) {
      throw new Error("cant find the products!!!!");
    }

    res.status(200).json(find);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const gettransactions = async (req, res) => {
  try {
    let query = Transaction.find();
    const sort = req.query.sort || "";
    if (sort) {
      query = query.sort(sort);
    }
    const getit = await Transaction.countDocuments();

    const page = Number(req.query.page);
    const pagesize = Number(req.query.pagesize);

    query = query.skip((page - 1) * pagesize).limit(pagesize);

    const number = Math.ceil(getit / pagesize);

    const all = await query;

    res.status(200).json({ all, number });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
