import React, { Component } from "react";
import "../../styles/login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div id="login">
          <form method="post" action="">
            <h1>Login</h1>
            <p>
              <label>Seu nome</label>
              <input
                id="nome_login"
                name="nome_login"
                required="required"
                type="text"
                placeholder="ex. contato@htmlecsspro.com"
              />
            </p>

            <p>
              <label>Seu e-mail</label>
              <input
                id="email_login"
                name="email_login"
                required="required"
                type="password"
                placeholder="ex. senha"
              />
            </p>

            <p>
              <input type="submit" value="Logar" />
            </p>
          </form>
        </div>
      </div>
    );
  }
}
