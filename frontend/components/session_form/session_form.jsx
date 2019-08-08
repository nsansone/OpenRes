import React from 'react';
import { withRouter } from 'react-router-dom';



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fname: "", lname: "", email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.processForm(this.props.demoUser).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    

    render() {
        return (
            <div className="modal-screen">
                <form onSubmit={this.handleSubmit} className="modal-form">
                    {this.props.formType === 'login' &&
                        <>
                            <h1>
                                Please sign in
                            </h1>
                            <hr/>
                            <div className="auth-errors">
                                {this.renderErrors()}
                            </div>
                        </>
                    } 
                    {this.props.formType === 'signup' &&
                        <>
                        <h1>
                            Welcome to OpenRes!
                        </h1>
                        <hr/>
                        <div className="auth-errors">
                            {this.renderErrors()}
                        </div>
                        <div className="input"> 
                            <input placeholder="First Name *" className="signup-input" type="text" value={this.state.fname} onChange={this.update('fname')} />
                        </div>
                        <div className="input"> 
                            <input placeholder="Last Name *" className="signup-input" type="text" value={this.state.lname} onChange={this.update('lname')} />
                        </div>
                        </>
                    }
                        <div className="input"> 
                            <input placeholder="Enter email *" className="signup-input" type="text" value={this.state.email} onChange={this.update('email')} />
                        </div>
                        <div className="input">
                            <input placeholder="Enter password *" className="signup-input" type="password" value={this.state.password} onChange={this.update('password')} />
                        </div>
                {this.props.formType === 'signup' &&
                        <div className="submit">
                            <input className="session-submit" type="submit" value="Create Account" />
                        </div>
                }
                {this.props.formType === 'login' && 
                    <>
                        <div className="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className="submit">
                            <input className="session-submit" type="submit" value="Sign In"/>
                            <button onClick={this.handleClick} className="session-submit" >Demo User</button>
                        </div>
                        <div className="new-account">
                            New to OpenRes? &nbsp;
                            <a href="#">Create an account</a>
                        </div> 
                    </>
                }
                </form>
                <div className="modal screen js-modal-close"></div>
            </div>
        );
    }
}

export default withRouter(SignupForm);