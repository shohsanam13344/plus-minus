import React from "react";


class State extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            son: 10,
            title: ''
        }
    }

    render(){
        const plus = () => {
            console.log('plus')
            this.setState({son:this.state.son + 1})
        }
        // const minus = () => {
        //    if(this.state.son > 0){
        //          console.log('minus')
        //          this.setState({son:this.state.son - 1})
        //    }
        // }
        return(
            <div className="box">
                <button className="btn1" onClick={plus}>+</button>
                <h1 className="h1">{this.state.son} </h1>
                {/* <button className="btn2" onClick={minus}>-</button> */}
            </div>

        )
    }
    
}

export default State