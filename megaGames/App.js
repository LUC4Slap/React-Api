import React, {Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resposta: [],
    };
  }

  async chamaApi() {
    let dados = await axios.get("http://localhost:8080/games");
    this.setState({ resposta: dados.data });
  }

  componentDidMount() {
    console.log(this.state.resposta);
    this.chamaApi();
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
        <View >
          {this.state.resposta.map(game => {
            <View>
              <Text>{ game.title }</Text>
            </View>
          }) }
          <Text style={{ color: '#fff', fontSize: 24 }}>Teste</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
});

export default App;
