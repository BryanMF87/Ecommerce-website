import React from 'react';
import "./ProductCard.css";
import Counter from "../../components/Counter/Counter";

function ProductCard({name, price, image, qty, setCartCount, cartItems, setCartItems}) {

    return (
        <div className="card">
            {/* <div className="product-image" style={{backgroundImage: `url(${image})`}}></div> */}
            <img src={image} alt="macaron"/>
            <div className="product-info">
                <div className="product-title">{name}</div>
                <div className="product-price">${price} each</div>
                <Counter
                    qty={qty}
                    name={name} 
                    setCartCount={setCartCount} 
                    cartItems={cartItems}
                    setCartItems={setCartItems} />
            </div>
        </div>
    );
}

export default ProductCard;