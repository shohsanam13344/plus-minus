import React from "react";
import './Table.css'
import {data} from './data.js';


class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subjects: data,
            search: '',
            select: 'name',
            name: ''
        }
    }
    render(){

         const onSearch = (e) => {
            const {value} = e.target;
            const res = data.filter((item) => item[this.state.select].toString().toLowerCase().includes(value.toLowerCase()))
            this.setState({subjects: res})
         }

         const onSelect = (e) =>{
             const {value} = e.target;
             this.setState({select: value})
         }
         
         const onEnterChange = (e) => {
            const {value} = e.target;
            this.setState({name: value})

         }

         const onAdd = () =>{
            const newUser = {
                id: this.state.subjects.length +1,
                name: this.state.name
            }

            this.setState({
                subjects: [...this.state.subjects, newUser],
                name: ''
            })
         }

         const onDelete = (id) => {
           let res = this.state.subjects.filter((value) => value.id !== id)
           this.setState({subjects: res})
         }

        return(
            <div className="container">
                <div className="title2">
                           <h3 className="title">React.js</h3>
                           <span>{this.state.subjects.length} posts, like 0</span>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="search..." className="search" onChange={onSearch}/>
                    <select  className="selection" onChange={onSelect}>
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div className="data-wrapper">
                    <table>
                        <thead></thead>
                        <tbody>
                            {    
                                this.state.subjects.length ? (
                                this.state.subjects.map(({id, name}) =>{
                                    return(
                                        <tr>
                                             <td className="data-id">{id}</td>
                                             <td className="data-name">{name}</td>
                                             <td className="data-btn">
                                                <a href=""><i class="fa-solid fa-star"></i></a>
                                                <a href="" onClick={() => onDelete(id)}><i class="fa-solid fa-trash"></i></a>
                                                <a href=""><i class="fa-solid fa-heart"></i></a>
                                             </td>
                                        </tr>
                                    )
                                })
                                ) : <h4>No Data Sorry!</h4>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="add-wrapper">
                    <input value={this.state.name} className="search" type="text" placeholder="inter a title" onChange={onEnterChange}/>
                    <button className="add-data" onClick={onAdd}>add</button>
                </div>
            </div>

        )
    }
    
}

export default Table;