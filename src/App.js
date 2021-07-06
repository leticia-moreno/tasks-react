import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import About from './components/pages/About';

export default class App extends React.Component{
  state ={
    tasks:[],
    showAddTask:false
  }
  componentDidMount(){
    const getTasks = async ()=>{
      const resp = await fetch('http://localhost:5000/tasks')
      const tasks = await resp.json()
      this.setState({tasks: tasks});
    }
    getTasks();
  }

  markComplete = (id)=>{
    const fetchTaskToUpdate = async(id)=>{
      const resp = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await resp.json()
      return data
    }
    const taskToUpdate = fetchTaskToUpdate(id);
    const updatedTask = {...taskToUpdate, completed: !taskToUpdate.completed}
    const updateTask = async(id) =>{
      await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers:{
          'Content-type': 'application/JSON'
        },
        body: JSON.stringify(updatedTask)
      })
      this.setState({tasks: this.state.tasks.map(task =>{
        if(task.id === id){
          task.completed = !task.completed
        }  
        return task
      })})
    }
    updateTask(id);
  }

  deleteTask = (id) =>{
    const del = async (id)=>{
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })
    }
    del(id);
    this.setState({tasks : this.state.tasks.filter(task =>task.id !== id)});
  }
  saveTask = (task)=>{
    let newTask = {
      title: task.title,
      completed: task.completed
    }
    const addTask = async ()=>{
      const resp = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newTask)
      })  
      const data = await resp.json()
      this.setState({tasks: [...this.state.tasks, {...data}]});
    }
    addTask();
  }
  showAddTask = ()=>{
    this.setState({...this.state.tasks, showAddTask: !this.state.showAddTask});
  }
  render(){
    return(
      <Router>
        <div className="container">
          <Header title="Task Tracker" showAddTask={this.showAddTask} isFormOpen={this.state.showAddTask}/>
          <Route exact path='/' render={props =>(
            <React.Fragment>
              {this.state.showAddTask && <AddTaskForm saveTask={this.saveTask}/>}
              {this.state.tasks.length > 0 ? <Tasks state={this.state.tasks} markComplete={this.markComplete} delete={this.deleteTask}/> : 'No tasks to show'}
            </React.Fragment>
            )}/>

            <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}
