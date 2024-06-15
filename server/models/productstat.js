import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    monthlyData: [{ month: String, totalSales: Number, totalUnits: Number }],
    dailyData: [{ date: String, totalSales: Number, totalUnits: Number }],
  },

  { timestamps: true }
);
export const Productstat = mongoose.model("Productstat", productSchema);
