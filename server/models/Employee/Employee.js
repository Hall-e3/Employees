import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Branch from "../Branch/Branch.js";
const employeeSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    max: [127, "Max length is 127 characters"],
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  salary: Number,
  city: String,
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  branch: {
    type: Schema.Types.ObjectId,
    enum: [
      "Kawoshi Branch",
      "Beja Branch",
      "Jakata Branch",
      "Kampala Branch",
      "Mukono Branch",
      "Mbarara Branch",
      "Jinja Branch",
    ],
    ref: "Branch",
  },
  hireDate: {
    type: Date,
    default: new Date(),
  },
  isPermanent: {
    type: Boolean,
    default: false,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
