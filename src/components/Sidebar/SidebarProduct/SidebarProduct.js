import React from 'react';
import Counter from "../../Counter/Counter";
import "./SidebarProduct.css";

function SidebarProduct({name, qty, price, image, cartItems, setCartItems}) {
    const num = qty * price;
    const subTotal = num.toFixed(2);


    const remove = () => {
       const newItems = cartItems.map((item) => {
        if(item.name === name){
            return {
                ...item,
                qty: 0
            }
        }
        return item
       })

       setCartItems(newItems)
    }

    return (
        <div className="cart-item" key={name}>
            <div className="image" style={{backgroundImage: `url(${image})`}} />
            <div className="cart-item-info">
                <div className="name">{name}</div>
                <div className="numbers">
                    <Counter name={name} cartItems={cartItems} setCartItems={setCartItems}/>
                    <p className="sub-total">${subTotal}</p>
                    <button className="remove" onClick={remove}>X</button>
                </div>
            </div>
        </div>
    )
}

export default SidebarProduct