import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        console.log("Chiild Constructor");
    }
    componentDidMount(){
    console.log("Chiild componentDidMount");
  }
    render(){
        console.log("Chiild Render");
        return(
            <div>
                <h2>{this.props.classCompName}</h2>
                <h1>{this.state.count}</h1>
                <UserContext.Consumer>
                    {
                        ({name}) => (<p>{name}</p>)
                        
                    }
                </UserContext.Consumer>
                <button onClick={() => {
                    this.setState(
                        {
                            count: this.state.count +1
                        }
                    )
                }}>Click to increase count</button>
            </div>

        )
    }
}

export default UserClass;