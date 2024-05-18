import React from 'react'
import { useParams } from 'react-router-dom';
import { useProductDetailsQuery } from '../redux/api/productAPI';
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const OrderDetails = () => {

  const params = useParams();
  

  const { data } = useProductDetailsQuery(params.id!);

  const { price, photo, name, stock, category,description } = data?.product || {
    photo: "",
    category: "",
    name: "",
    stock: 0,
    price: 0,
  };
  const dispatch = useDispatch();
  const oldprice=price-100;
  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };
  return (
    <div className="product-card">
    <div className="badge">Hot</div>
    <div className="product-tumb">
    <img src={photo} alt=""/>
    </div>
    <div className="product-details">
    <span className="product-catagory">{category}</span>
    <h4>
    <a href="#">{name}</a>
    </h4>
   <p>{description}</p>
    <div className="product-bottom-details">
 
    <div className="product-price">
    <small>{oldprice}</small>{price}
    </div>
    <div className="product-links">

    <a href="#">
    <i className="fa fa-shopping-cart" onClick={
      ()=>addToCartHandler({
        productId: params.id!,
              price,
              name,
              photo,
              stock,quantity:1
      })
    }></i>
    </a>
    </div>
    </div>
    </div>

    </div>
    
  )
}

export default OrderDetails