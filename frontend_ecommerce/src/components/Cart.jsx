import React from 'react'

function Cart(props) {
    const cartContents = props.cart.map((product, i) => {
        return <li key={i}>{product.name}</li>
    })
    const cartTotal = props.cart.reduce((acc, obj)=>{
        return acc + obj.price
    }, 0)
    return (
        <div>
            <h2>Cart</h2>
            <p>Total ${cartTotal}</p>
            <ul>
                {cartContents}
            </ul>
        </div>
    )
}

export default Cart