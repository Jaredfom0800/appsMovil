import React, { Component } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import {Container, Content, Card,CardItem,Body,Input,Item,Icon} from 'native-base';

import { styles } from './styles/styles';

class Inicio extends Component {

  render() {
    const navegar = this.props.navigation;
    return (

    <Container>
    <Content padder contentContainerStyle = {styles.content}>
      <Card>
        <CardItem header bordered style={styles.ini}> 
        <Text style={styles.title}>BIENVENIDO</Text>
        </CardItem>
      </Card>
      <Button
      title='Iniciar Sesión' style = {styles.btn}
                onPress={() => navegar.navigate('Inicio de sesión')}
              />
              <Card></Card>
      <Button style = {styles.btn}
                title='Registrarse'
                onPress={() => navegar.navigate('Registro')}
              />
      
   </Content>
   
 </Container>
            
      
    );
  }
}



export default Inicio;