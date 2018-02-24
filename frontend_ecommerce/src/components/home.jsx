import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Welcome to our store!</h1>
                <form>
                    <input
                        type='text'
                        id='inputbox'
                        ref={(input) => { this.name = input }}
                        placeholder='Enter your Username'>
                    </input>
                    <button
                        type='submit'
                        className='button'
                        onClick={(e) => {
                            this.props.addUsername(e, this.name.value); 
                        }}
                    >Submit
                    </button>
                </form>
                <Link className='button' to='/shop'>Go to the Store</Link>
            </div>
        )
    }
}

export default Home
