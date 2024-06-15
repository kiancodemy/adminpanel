import { Product } from "../models/product.js";
import { Productstat } from "../models/productstat.js";
export const getproucts = async (req, res) => {
  try {
    const find = await Product.find();
    if (!find) {
      throw new Error("cant find the products!!!!");
    }

    const stats = await Promise.all(
      find.map(async (value, key) => {
        const state = await Productstat.find({
          productId: value._id,
        });
        return { ...value._doc, state };
      })
    );

    res.status(200).json(stats);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
