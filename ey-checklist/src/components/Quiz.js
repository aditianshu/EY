import React, { Component } from 'react'
import Form from "@rjsf/core";
import '../styles/styles.css'
import logo from '../img/logo.png'


    //   type: "array",
    //   minItems: 2,
    //   title: "A multiple-choice list",
    //   items: {
    //     type: "string",
    //     enum: ["foo", "bar", "fuzz", "qux"],
    //   },
    //   uniqueItems: true
    // };

const schema = {
    title: "Check your Knowledge",
    type: "object",
   
    properties: {
      title: {type: "string", title: "Q1. Who is the current CEO of EY?", items: {
            enum: ["foo", "bar", "fuzz", "qux"],
          }, default: ""},
      accountNumber : {type: "string", title: "Q2. Who is your depatment lead?", items: {
        enum: ["foo", "bar", "fuzz", "qux"],
      }, default: ""},
      IFSCNumber : {type: "string", title: "Q3. Did you enjoy this game?", items: {
        enum: ["foo", "bar", "fuzz", "qux"],
      }, default: ""}
    }
  };
  const log = (type) => console.log.bind(console, type);


const uiSchema = {
    "ui:widget": "checkboxes"
    };

class Quiz extends Component{
    // constructor(props){
    //     super(props);
        
    // }

    render(){

        return (

            <div className = 'Task3' id = "Task3">
                <div className="form">
                    <img src = {logo}></img>
                    <Form schema={schema} uiSchema={uiSchema}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")} />
                </div>

                {/* <div>
                    <p>If the account has to be created : <span>Click Here</span></p>
                </div> */}
            </div>
        )
    }
}

export default Quiz;


// const Form = JSONSchemaForm.default;
// const schema = {
//   type: "array",
//   minItems: 2,
//   title: "A multiple-choice list",
//   items: {
//     type: "string",
//     enum: ["foo", "bar", "fuzz", "qux"],
//   },
//   uniqueItems: true
// };
// const uiSchema = {
//   "ui:widget": "checkboxes"
// };

// ReactDOM.render((
//   <Form schema={schema} uiSchema={uiSchema}/>
// ), document.getElementById("app"));
