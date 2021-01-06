import React, { Component } from 'react'
import Form from "@rjsf/core";

const schema = {
    title: "Bank Account Details for Salary Provisioning",
    type: "object",
    required: ["Name", "Account Number", "IFSC Code"],
    properties: {
      title: {type: "string", title: "Title", default: ""},
      accountNumber : {type: "string", title: "Account Number", default: ""},
      IFSCNumber : {type:"string", title:"IFSC Code", default : ""}
    }
  };
  const log = (type) => console.log.bind(console, type);

class Task3 extends Component{
    // constructor(props){
    //     super(props);
        
    // }

    render(){

        return (

            <div className = 'Task3'>
                <div >
                <Form schema={schema}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")} />
                </div>

                <div>
                    <p>If the account has to be created : <span>Click Here</span></p>
                </div>
            </div>
        )
    }
}

export default Task3;