import React from 'react';
import TodolistHeader from './TodolistHeader';
import TodolistBody from './TodolistBody';

export default class Todolist extends React.Component{
    renderItems(todos){
        return(
            todos.map((todos)=>{
                return(<TodolistBody todos={todos} key={todos.time}/>);
            }
            )
        );
    }
    render(){ 
              console.log(this.props.todo);
        return(
        <div>
            <table style={{border:"1px solid black"}}>
               <TodolistHeader/>
               <tbody>
               {this.renderItems(this.props.todo)}
               </tbody>
            </table>
        </div>
          
        );
    }
}