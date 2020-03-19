import React, { Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import {
  StyleSheet,Alert
} from 'react-native';


class Registro extends Component {
  
  constructor(props){
    super(props);
    this.state={usuario:'',
      pass:''
    }
  }

  userRegister = () =>{ 
    const {usuario} = this.state;
    const {pass} = this.state;

    fetch('http://192.168.8.23/react/registrar.php',{ 
      method: 'post',
      header: {
        'Accept': 'applicaion/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        pUsuario: usuario,
        pPass: pass
      })

    })
    .then((response) => response.text())
      .then((responseData) =>{
        if(responseData==1){
          Alert.alert("Registrado");
        }else{
          Alert.alert("Error al registrar");
        }
      })
      .catch((error)=>{
          console.error(error);
      });
  }




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
                      <Input placeholder = 'Nombre'  onChangeText={usuario=> this.setState({usuario})}/>
                    </Item> 
                  <Item lineLabel>
                    <Icon type = 'MaterialIcons' name = 'email'></Icon>
                    <Input placeholder = 'Correo'/>
                  </Item>
                  <Item lineLabel>
                    <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                    <Input placeholder = 'Constraseña'  onChangeText={pass => this.setState({pass})}/>
                  </Item>
                    <Item lineLabel>
                        <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                        <Input placeholder = 'Confirma contraseña'/>
                    </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button dark  style = { misEstilos.btn}onPress={this.userRegister}><Text>Aceptar</Text></Button>
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