import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { FaSpotify as Spotify } from 'react-icons/fa';
import { FaGoogle as Google } from 'react-icons/fa';
import { FaApple as Apple } from 'react-icons/fa';

class Login extends Component {
  constructor(props) {
    super(props);

    console.log('component constructing ...');

    this.state = {
      isLoggedIn: [],
      username: '',
      routes: [
        {
          path: "/spotify",
          component: this.loginForm,
        },
        {
          path: "/google",
          component: this.loginForm,
        },
        {
          path: "/apple",
          component: this.loginForm,
        }
      ]
    }

    this.loginForm = this.loginForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  loginForm = () => {
    console.log('loginForm called');
    return (
      <div className="form__container">
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            placeholder="Please enter an email" />
          <input type="password" placeholder="Please enter a password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  render() {
    const { routes } = this.state;

    return (
      <div className="login">
        <div className="login__menu">
          <Link to="/spotify"><Spotify color="#FFF" /></Link>
          <Link to="/google"><Google color="#FFF" /></Link>
          <Link to="/apple"><Apple color="#FFF" /></Link>
        </div>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </div>
    )
  }
}

export default Login;
