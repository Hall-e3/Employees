import mongoose from "mongoose";
const Schema = mongoose.Schema;
const productSchema = new Schema({
  productName: String,
  productType: String,
  productPrice: {
    type: Number,
    default: 0,
  },
  deliveryDate: {
    type: Date,
    default: new Date(),
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  branch: String,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
