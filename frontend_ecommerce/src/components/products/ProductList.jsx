import React from 'react'
import MyCard from './Card'

function ProductList(props) {
    let item = props.item.map((item, i) => {
        return <MyCard 
                    product={item} 
                    key={i} 
                    toCart={props.toCart} />
    })
    return (
        <div className='container'>
            <div className='row'>
                {item}
            </div>
        </div>
    )
}

export default ProductList