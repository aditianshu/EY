import React, { Component } from 'react'
import logo from '../img/logo.png'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
  } from 'react-router-dom';
import '../styles/styles.css';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state={
            email : "",
            password : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(eve){
        const name = eve.target.name;
        const value = eve.target.value;
        this.setState({[name]: value});
        
    }

    handleSubmit(eve){
        eve.preventDefault();
        console.log(this.state);

        //LOGIN BACKEND STUFFFFF




    }


    render(){

        return (

            <div className = 'Login' id = "Login">
                <div className="container-fluid">
                    <div className="row">
                        <section className="col-md-6 col-xs-12" id="panel-left">
                            <img src={logo}></img>
                        </section>


                        <section className="col-md-6 col-xs-12" id="panel-right">
                            <div className="container">
                                <div className="row mb-5 justify-content-center">
                                    <h2 className="col-12 text-center" >Login</h2>
                                </div>
                                <div className="row">                    
                                    <form className="col-12 col-md-8 offset-md-2" onSubmit={this.handleSubmit}>
                                        <div className="form-group" >
                                            <input 
                                            type="text" 
                                            value={this.state.email} 
                                            onChange = {this.handleChange}
                                            name="email" id="email" target = "email"placeholder="E-mail" required></input>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            type="password" 
                                            value={this.state.password} 
                                            onChange = {this.handleChange}
                                            name="password" id="password" placeholder="Password" required></input>
                                        </div>
                                        <div className="form-group text-center pt-4">
                                            <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            
                                            ><a href="/dash">Start!</a></button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;