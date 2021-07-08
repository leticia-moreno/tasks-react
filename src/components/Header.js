import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return(
            <header className='header'>
                <h1>{this.props.title}</h1>
                <Link to='/'>Home</Link>&ensp;|&ensp;<Link to='/about'>About</Link>
            </header>
        )
    }
}