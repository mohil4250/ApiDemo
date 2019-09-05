import React from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';
import { First } from 'react-bootstrap/PageItem';


// const listData = [];
// console.log(listData);


class Test extends React.Component{
    state = {
        listData:[],
            loading:true,
        }

    componentDidMount()
        {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res=>{
        console.log(res.data);
        this.setState({listData:res.data})
        })
        }

    render(){
    return(
    <div>
        {this.state.listData.map(el => (
            <div> 
            <h1> {el.userId} </h1>
            <h1> {el.id} </h1>
            <h1> {el.title} </h1>
            <h1> {el.completed} </h1>
            <br></br>
            </div>
        ))}
    </div>
        );
    }
}

export default Test;