import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='nine columns'>
                            <h1>Dude Food</h1>
                            <p>Fine dining for the discerning single man</p>
                        </div>
                        <div className='three columns'>
                            <h3> Hi {props.username}!</h3>
                        </div>
                    </div>
                </div>
            </header>
            <nav className='nav'>
                <div className='container'>
                    <Link to='/'>Home  ></Link>
                    <Link to='/shop'>Shop</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header