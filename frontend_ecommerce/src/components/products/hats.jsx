import React, { Component } from 'react'
import Card from './card'

class Hats extends Component {
    render() {
        const hat = this.props.hats.map((hat, i) => {
            return <Card product={hat} key={i} toCart={this.props.toCart}/>
        })
        return (
            <ul>
                {hat}
            </ul>
        )
    }
}

export default Hats