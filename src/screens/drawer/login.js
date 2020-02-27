import React, { Component } from "react";
import { Button,Container, View, Content, Card, CardItem, Text, Body, Item, Label, Input, Icon } from "native-base";
import { StyleSheet } from 'react-native';





class Login extends Component {

  constructor(props){
    super(props);
    this.state={usuario:'',pass:''};
  }

  render(){
  const navegar = this.props.navigation;
  return (
    <>
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered style= {misEstilos.textoA}>
              <Text style = {misEstilos.textCenter} >Iniciar Sesión</Text>
            </CardItem>
            <CardItem bordered style= {misEstilos.datos}>
              <Body style = {misEstilos.body}>
                  <Item floatingLabel>
                      <Icon type = 'FontAwesome' name='user-circle-o'></Icon>
                      <Label> Nombre de usuario</Label>
                    <Input type="text" value={this.state.usuario}
                    onChangeText={(usuario)=> this.setState({usuario})}
                    />
                  </Item>
                  <Text></Text>
                  <Item floatingLabel>
                    <Icon primary type = 'FontAwesome' name='lock'></Icon>
                    <Label> Contraseña</Label>
                    <Input type="password" value={this.state.pass}
                    onChangeText={(pass)=> this.setState({pass})}/>                 
                    <Input type="password" value={this.state.pass}
                    onChangeText={(pass)=> this.setState({pass})}/>
                  </Item>
                  <Item floatingLabel>
                <Input /*  value={this.state.password} textContentType={'password'} multiline={false} secureTextEntry={true} 
               onChangeText={(text) => { this._savePassword(text); this.setState({ password: text }); }} 
               placeholder='Github password'*/ />
                  </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
           
               <Button dark style= {misEstilos.textCenter} onPress={() => 
                navegar.navigate('Perfil',{pass: this.state.pass, usuario: this.state.usuario})}>
                 <Text style={misEstilos.TextoBtn}>Aceptar</Text></Button>
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
    flex: 1,
    fontSize: 50,
    justifyContent: 'center',
    backgroundColor: '#000000',
    
  
  },
  TextoBtn: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    
  
  },

  textCenter: {
    fontSize: 36,
    textAlign: 'center',
    width: '100%',
    color: 'black'
  },

  pie: {
    justifyContent: 'center',
    backgroundColor: '#0CE2E2'
  },

  centrar: {
    flex: 1,
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'center'
    
  },

  body: {
    paddingVertical: 35,
  },

  textoA: {
    backgroundColor: '#0CE2E2'
  },

  datos: {
    backgroundColor: '#0CE2E2'
  }
});

export default Login;