import React from 'react';

export default class TodolistHeader extends React.Component{
    render(){
        return(
             <thead>
                    <tr>
                    <th><h1>Time</h1></th>
                    <th><h1>Task</h1></th>
                    <th><h1>Status</h1></th>
                    </tr>
                </thead>            

        );
    }
}