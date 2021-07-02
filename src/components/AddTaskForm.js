import React from 'react';

export default class AddTaskForm extends React.Component{
    state ={
        title: '',
        completed: false
    }

    submitTask = (e)=>{
        e.preventDefault();
        if(!this.state.title){
            alert('Please insert a title');
            return;
        }
        this.props.saveTask(this.state);
        this.setState({title: '', completed: false});
    }

    render(){
        return(
            <form className='add-form' onSubmit={this.submitTask}>
                <div className='form-control'>
                    <label>Task Name</label>
                    <input type="text" placeholder='Name' value={this.state.title} 
                    onChange={(e)=>{
                        this.setState({title: e.target.value})
                    }}/>
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Completion</label>
                    <input type="checkbox" value={this.state.completed} checked={this.state.completed} 
                    onChange={(e)=>{
                        this.setState({completed: e.currentTarget.checked})
                    }}/>
                </div>
                <input type="submit" value="Save" className='btn btn-block'/>
            </form>
        )
    }
}
