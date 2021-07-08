import React from 'react';

export default class Button extends React.Component{
    render(){
        return <button style={{backgroundColor:this.props.color}}className={this.props.classes} onClick={this.props.onClick} >{this.props.text}</button>
    }
}

Button.defaultProps= {
    color:'steelblue',
    text: 'default'
}