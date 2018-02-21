import React, {Component} from 'react'
import Card from './card'

class Shoes extends Component {
    render(){
      const shoe = this.props.shoes.map((shoe, i)=>{
          return <Card product={shoe} key={i} toCart={this.props.toCart} />
      })
        return(
            <ul>
                {shoe}
            </ul>
        )
    }
}

export default Shoes