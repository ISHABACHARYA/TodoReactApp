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

    render(){
        return(
                <tr>
                    <td>{this.props.todos.time}</td>
                    <td>{this.props.todos.task}</td>
                    {this.actionPerformed()}
                </tr>
        );
    }
}