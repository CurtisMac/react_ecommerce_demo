import React from 'react'
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card'

function MyCard(props) {
    return (
        <div className='one-half column card'>
            <Card>
                <CardHeader
                    title={props.product.name}
                    subtitle={`$ ${props.product.price}`}
                />
                <CardMedia>
                    <img src={props.product.picture} alt={props.product.name} />
                </CardMedia>
                <CardActions>
                    <IconButton 
                        iconClassName="material-icons md-18" 
                        onClick={() => { props.toCart(props.product) }}
                        >shopping_cart
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}
export default MyCard