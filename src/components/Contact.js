import UserClass from "./UserClass";
import React from "react";
class Contact extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");

  }
  componentDidMount(){
    console.log("Parent componentDidMount");
  }
  render(){
    console.log("Parent Render");
    return (
      <div>
        <h2>Contact</h2>
        <UserClass classCompName={"Class Component"}/>
      </div>
    )
  }
}

export default Contact