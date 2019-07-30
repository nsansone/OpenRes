import React from 'react';
import { withRouter } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fname: "", lname: "", email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form'box">
                    Welcome to OpenRes!
                    <br />
                    {this.renderErrors()}
                    <div className="signup-form">
                        <br />
                        <label>
                            First Name *
                            <input className="signup-input" type="text" value={this.state.fname} onChange={this.update('fname')} />
                        </label>
                        <br/>
                        <label>
                            Last Name *
                            <input className="signup-input" type="text" value={this.state.lname} onChange={this.update('lname')} />
                        </label>
                        <br/>
                        <label>
                            Enter email *
                            <input className="signup-input" type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <br />
                        <label>
                            Enter password *
                            <input className="signup-input" type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value="Create Account" />
                    </div>
                </form>

            </div>
        );
    }
}

export default withRouter(SignupForm);