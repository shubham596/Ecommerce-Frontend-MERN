import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { Link } from "react-router-dom";
import { CartItem } from "../types/types";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="single-card">

<div className="img-area">
<img src={`${photo}`} alt={name} />
        <div className="overlay">
         <Link to={`/product/${productId}`}> <button className="view-details">View Details</button> </Link>
        </div>
      </div>

      <div className="info">
        <h3>{name}</h3>
        <p className="price">₹{price}</p>
        <button className="add-to-cart"
          onClick={() =>
            handler({ productId,
              price,
              name,
              photo,
              stock,quantity:1})
          }
        >
       Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



     