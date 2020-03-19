import React, { Component } from "react";
import { Button,Container, View, Content, Card, CardItem, Text, Body, Item, Label, Input, Icon } from "native-base";
import { StyleSheet,ActivityIndicator,AppRegistry,
  Alert} from 'react-native';
import { api } from '../../api'




class Login extends Component {



  constructor(props){
    super(props);
    this.state={usuario:'', 
    pass:''
  }
  }

  
  state = {showIndicator:false}
  onButtonPress = () => {
    this.setState({
      showIndicator: true
    }),this.props.navigation.navigate('Perfil')};


   userLog = () =>{ 
    const {usuario} = this.state;
    const {pass} = this.state;

    fetch('http://192.168.8.23/react/login.php',{ 
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        pUsuario: usuario,
        pPass: pass
      })

    })
    .then((response) => response.text())
      .then((responseData) =>{
        if(responseData == 1){
             this.props.navigation.navigate('Perfil');
        }else{
          Alert.alert("Usuario o contraseña incorrectos")
        }
        
      })
      .catch((error)=>{
          console.error(error);
      });
  } 





  render(){

    if(this.state.showIndicator){
      return (
        <View style={misEstilos.content}>
          <ActivityIndicator size="large" color="#36FF0E" />
        </View>
      );  
    }else{
      
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
                      </Item>
                      <Item floatingLabel>
                    <Input /*  value={this.state.password} textContentType={'password'} multiline={false} secureTextEntry={true} 
                   onChangeText={(text) => { this._savePassword(text); this.setState({ password: text }); }} 
                   placeholder='Github password'*/ />
                      </Item>
                      
                  </Body>
                </CardItem>
                <CardItem footer bordered style = { misEstilos.pie}>
               
                   <Button dark style= {misEstilos.textCenter} 
                     onPress={this.userLog}>
                     <Text style={misEstilos.TextoBtn}>Aceptar</Text></Button>
                     
                </CardItem>
              </Card>
            </Content>
          </Container>
         
          
        </>
      );
    }
  
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