import React from 'react';
import Button from './Button';

export default class Header extends React.Component{
    render(){
        return(
            <header className='header'>
                <h1>{this.props.title}</h1>
                <Button color='green' text='Add'/>
            </header>
        )
    }
}