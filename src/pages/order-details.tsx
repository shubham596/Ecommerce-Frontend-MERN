import React from 'react'

const OrderDetails = () => {
  return (
    <div className="product-card">
    <div className="badge">Hot</div>
    <div className="product-tumb">
    <img src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt=""/>
    </div>
    <div className="product-details">
    <span className="product-catagory">Women, bag</span>
    <h4>
    <a href="#">Women leather bag</a>
    </h4>
    <p>Awesome women bag for all type of women buy now offer limited.</p>
    <div className="product-bottom-details">
    <div className="product-price">
    <small>$100</small>$230.99
    </div>
    <div className="product-links">

    <a href="#">
    <i className="fa fa-shopping-cart"></i>
    </a>
    </div>
    </div>
    </div>

    </div>
    
  )
}

export default OrderDetails