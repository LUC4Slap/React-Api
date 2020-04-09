import React, { Component } from "react";
import axios from "axios";
import Header from './header'

export default class Corpo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resposta: [],
    };
  }

  async chamaApi() {
    let dados = await axios.get("http://localhost:8080/games");
    console.log(dados.data);
    this.setState({ resposta: dados.data });
    return dados.data;
  }

  componentDidMount() {
    this.chamaApi();
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.resposta.map((m) => {
          return (
            <div className="container" key={m.id}>
              <div className="card mt-3">
                <div className="card-header">
                  <strong>{m.title}</strong>
                </div>
                <div className="card-body">
                  <span>R${m.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
