import React, { Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import {
  StyleSheet,ActivityIndicator,Switch
} from 'react-native';




class Perfil extends Component {

  state = {switch1Value:false}



  toggleSwitch1=(value) => {
    this.setState({switch1Value:value})
    console.log('Switch 1 is: '+value)
  }

  render(){
    const navegar = this.props.navigation;
          return (
    <>
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered style = {misEstilos.body}>
              <Text style = {misEstilos.textCenter} >Bienvenido</Text>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
          <Text style={misEstilos.textCenter}>Usuario : {this.props.route.params.usuario}</Text>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
          <Text style={misEstilos.textCenter}>Tu password es : {this.props.route.params.pass}</Text>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Switch onValueChange = {this.toggleSwitch1} value={this.state.switch1Value}/>
          <Text style={misEstilos.pie}>{this.state.switch1Value ?'Prendido':'Apagado'}</Text>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button dark style= {misEstilos.centrar} onPress={() => 
                navegar.navigate('Movies')}><Text>Peliculas</Text></Button>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button dark style= {misEstilos.centrar} onPress={() => 
                navegar.navigate('Inicio de sesión')}><Text>Salir</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </>
  );
          }
};

const misEstilos = StyleSheet.create({
  content: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    
  
  },

  textCenter: {
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
    width: '100%'
  },

  pie: {
    backgroundColor: '#0CE2E2',
    justifyContent: 'center'
  },

  centrar: {
    flex: 3,
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'center'
  },

  izquierda: {
    backgroundColor: '#0CE2E2',
    flex: 3,
    justifyContent:  'center'
  },

  body: {
    paddingVertical: 35,
    backgroundColor: '#0CE2E2'
  },
  btn:{
    flex: 1,
    justifyContent:'center',
    //marginLeft: '70%',
  },
  switch:{
    flex:1,
    alignItems:'center',
    marginTop:1000
  },
});

export default Perfil;