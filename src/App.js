import React from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';

export default class App extends React.Component{
  state ={
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        completed : false
      },
      {
        id: '2',
        title: 'Task 2',
        completed : true
      },
      {
        id: '3',
        title: 'Task 3',
        completed : false
      }
    ],
    showAddTask:false
  }
  markComplete = (id)=>{
    this.setState({tasks: this.state.tasks.map(task =>{
      if(task.id === id){
        task.completed = !task.completed
      }
      return task
    }) })
  }
  deleteTask = (id) =>{
    this.setState({tasks : this.state.tasks.filter(task =>{return (task.id !== id) ? task : null})
  })
  }
  saveTask = (task)=>{
    let newTask = {
      id: 66,
      title: task.title,
      completed: task.completed
    }
    this.setState({tasks: [...this.state.tasks, {...newTask}]});
  }
  showAddTask = ()=>{
    this.setState({...this.state.tasks, showAddTask: !this.state.showAddTask});
  }
  render(){
    return(
      <div className="container">
        <Header title="Task Tracker" showAddTask={this.showAddTask}/>
        {this.state.showAddTask && <AddTaskForm saveTask={this.saveTask}/>}
        {this.state.tasks.length > 0 ? <Tasks state={this.state.tasks} markComplete={this.markComplete} delete={this.deleteTask}/> : 'No tasks to show'}
      </div>
    )
  }
}
