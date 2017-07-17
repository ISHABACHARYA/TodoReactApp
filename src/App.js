import React, { Component } from 'react';
import Task from './Task';
import Todolist from './Todolist';

 const  todos = [
    {
      time: 20,
      task : "go and code",
      iscompleted: false
    },
    {
        time: 1,
        task: 'go and sleep',
        iscompleted: false
      },
     {
        time:6,
        task:'get up and go to college',
        iscompleted:true
      }
  ];

class App extends Component {

    constructor(props){
      super();
      this.state= {
        todo : todos,
      };
    }
    createTask(task,time){
      this.state.todo.push({
        task:task,
        time:time,
        iscompleted: false
      });
      this.setState({todos:this.state.todos});
    }
  render() {

    return (
      <div  style={{float:'center',marginLeft:'400px'}}>
        <Task createTask={(a,b)=>this.createTask(a,b)}/>
       <Todolist todo= {this.state.todo}  />
      </div>
    );
  }
}

export default App;
