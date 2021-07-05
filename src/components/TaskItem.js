import React from 'react';
import Button from './Button';
export default class TaskItem extends React.Component{
  render(){
    const { id } = this.props.task
      return(
    <div className={`task ${this.props.task.completed ? 'reminder' : ''}`} onDoubleClick={this.props.markComplete.bind(this, id)}>
        <h3>{this.props.task.title} <Button color='red' text='X' onClick={this.props.delete.bind(this, id)} /></h3>
    </div>
    )
  }
}
