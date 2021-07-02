import React from 'react';
import TaskItem from './TaskItem';

export default class Tasks extends React.Component{
  
  render(){
    return this.props.state.map((task) =>(
      <TaskItem key={task.id} task={task} markComplete={this.props.markComplete} delete={this.props.delete}/>
    ))
  }
}

