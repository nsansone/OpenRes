import React from 'react';
import { withRouter } from 'react-router-dom';
 

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error,i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form'box">
                    Please sign in  
                    <br/>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label>
                            Email 
                            <input className="login-input" type="text" value={this.state.email} onChange={this.update('email')}/>
                        </label>
                        <br/>
                        <label>
                            Password 
                            <input className="login-input" type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                        <br/>
                        <a href="#">Forgot Password?</a>
                        <br/>
                        <input className="session-submit" type="submit" value="Sign In"/>
                        <br/>
                        New to OpenRes? 
                        <a href="#">Create an account</a>
                    </div>
                </form>

            </div>
        );
    }
}

export default withRouter(SessionForm);