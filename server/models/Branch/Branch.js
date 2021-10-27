import mongoose from "mongoose";
const Schema = mongoose.Schema;

const branchSchema = new Schema({
  branchName: String,
  branchService: String,
  branchProducts: String,
  city: String,
  inCharge: String,
});

const Branch = mongoose.model("Branch", branchSchema);
export default Branch;
