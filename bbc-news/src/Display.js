import React, { Component } from 'react'

class Display extends Component{
    render(){
        return(
            <div>
                <img src={this.props.imgUrl}/>
                <h1>{this.props.title}</h1>
                <h5>{this.props.description}</h5>
            </div>
        )
    }
}


export default Display