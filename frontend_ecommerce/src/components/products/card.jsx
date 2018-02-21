import React, {Component} from 'react'

class Card extends Component {
    render() {
        return (
            <li>
                {this.props.product.name}, 
                {this.props.product.price},
                <button type='button' onClick={()=>{this.props.toCart(this.props.product)}}>Add to cart</button>
            </li>
        )
    }
}

export default Card
