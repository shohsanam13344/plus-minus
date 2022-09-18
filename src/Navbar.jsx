import { Component} from "react";
import './Navbar.css';
import img1 from './img/Vector.png';

class Navbar extends Component {
    render() {
        return (
            <nav>
               <div className="nav-box">
                   <div>
                        <img src={img1} alt="" />
                        <a href='' className="logo">Houzing</a>
                   </div>
                  <ul id="" className="nav-ul-box">
                      <li><a href="">Home</a></li>
                      <li><a href="">Properts</a></li>
                      <li><a href="">Contact</a></li>
                  </ul>
                  <button className="btn">Login</button>
               </div>
            </nav>
        )
      }
}

export default Navbar