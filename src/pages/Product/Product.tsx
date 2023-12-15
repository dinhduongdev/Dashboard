import Single from "../Single/Single";
import { singleProduct } from "../../data";
const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
