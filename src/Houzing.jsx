import { Component} from "react";
import {data} from './data';
import Navbar from "./Navbar";
import './img/img1.png';
// import img2 from './img/Vector2.png';


class Houzing extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: data,
            firstName: ''
        }
    }
    render() {

        const onSearch = (e) => {
            const { value } = e.target;
            const res = data.filter(({id,title,desc}) => title.toLowerCase().includes(value.toLowerCase()))
            this.setState({name: res})
        }
        return (
            <div className="container">
                <Navbar />
                <div className="main-section">
                       <div className="inputs">
                           <input className="input" name="name" type="text" placeholder="Enter an address, neighborhood, city" 
                           onChange={onSearch} />
                            <h1 className="h1">Properties</h1>
                            <p className="p2">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                       </div>
                       <div className="number">
                            <h3>13,474 results: {this.state.name.length}</h3>
                        </div>
                   <div className="img-card-box">
                         {
                             this.state.name.map(({id, title, desc, img}) => {
                               return (
                                     <div className="card-box">
                                         <div className="card">
                                            <img className="img-box" src={img} alt="" />
                                            {/* <p className="p">{id}</p> */}
                                            <p className="p">{title}</p>
                                            <span className="span">{desc}</span>
                                          </div>
                                    </div>
                                )
                            })
                        }
                   </div>
                </div>
            </div>
        )
      }
}

export default Houzing