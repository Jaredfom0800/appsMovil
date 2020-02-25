import React, { Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import {
  StyleSheet,
} from 'react-native';


class Registro extends Component {
  render(){
          return (
    <>
    
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered style = {misEstilos.body}>
              <Text style = {misEstilos.textCenter} >Registro</Text>
            </CardItem>
            <CardItem bordered style = {misEstilos.body}>
              <Body style = {misEstilos.body}>
                  <Item lineLabel>
                      <Icon type = 'Feather' name = 'user'></Icon>
                      <Input placeholder = 'Nombre'/>
                    </Item> 
                  <Item lineLabel>
                    <Icon type = 'MaterialIcons' name = 'email'></Icon>
                    <Input placeholder = 'Correo'/>
                  </Item>
                  <Item lineLabel>
                    <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                    <Input placeholder = 'Constraseña'/>
                  </Item>
                    <Item lineLabel>
                        <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                        <Input placeholder = 'Confirma contraseña'/>
                    </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button dark  style = { misEstilos.btn}><Text> Registrarte</Text></Button>
            </CardItem>
            <CardItem footer bordered style = {misEstilos.body}>
              <Button primary style={misEstilos.btn}><Icon type = 'Entypo' name = 'facebook'></Icon></Button>
              <Button danger style={misEstilos.btn}><Icon type = 'AntDesign' name = 'googleplus'></Icon></Button>
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
});

export default Registro;