import React from 'react';

class Task extends React.Component{
    addTask(event){
        event.preventDefault();
       { this.props.createTask(this.refs.taskinput.value,this.refs.tasktime.value)};
       this.refs.tasktime.value='';
       this.refs.taskinput.value='';
    }
    render(){
        return(
            <form onSubmit={(e)=>this.addTask(e)}>
                <input type="number" placeholder="Remainder time" style={{height:'30px',width:'100px'}} ref="tasktime"/>
                <input type="text" placeholder="Enter your daily tasks" style={{height:'30px',width:'200px'}} ref="taskinput"/>
                <button type="submit">Add to MyList</button>
            </form>
        );
    }
}

export default Task;