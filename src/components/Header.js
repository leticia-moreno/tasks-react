import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return(
            <header className='header'>
                <h1>{this.props.title}</h1>
                <Button color={this.props.isFormOpen ? 'red' : 'green'} text={this.props.isFormOpen ? 'Close' : 'Add'} onClick={this.props.showAddTask}/>
                <Link to='/'>Home</Link>&ensp;|&ensp;<Link to='/about'>About</Link>
            </header>
        )
    }
}