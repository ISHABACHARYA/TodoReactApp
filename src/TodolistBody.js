import React from 'react';

export default class TodolistBody extends React.Component{
    constructor(props){
        super();
        this.state={
            isEditing: false,
        };
    }
        editable(){
                this.setState({
                    isEditing:true,
                });
    }
        actionPerformed(){
                if(this.state.isEditing){
                    return(
                        <td><button >Save</button>
                        <button onClick={()=>this.onCancel()}>cancel</button>
                        </td>
                    );
                }
                    return(
                        <td><button onClick={()=>this.editable()} >Edit</button>
                    <button>Delete</button></td>
                    );
            }
        
         onCancel(){
             this.setState({
                 isEditing:false,
             })
         }   
        taskSection(){
            const {time,task,iscompleted} = this.props.todos;//destructuring the object using ES6 property
            const taskstyle={
                color : iscompleted ? 'green' :'red',
                cursor: 'pointer',

            };
           return(
                 <td style={taskstyle} onClick={()=>this.taskredefine(task)}>{this.props.todos.task}</td>
           );
        }

        taskredefine(task){
            
        }

    render(){
        return(
                <tr>
                    <td>{this.props.todos.time}</td>
                     {this.taskSection()}
                    {this.actionPerformed()}
                </tr>
        );
    }
}