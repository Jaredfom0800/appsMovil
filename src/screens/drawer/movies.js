import React, { Component } from 'react';
import {Text, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container,  Content, Card, CardItem, Body, Item, Label, Input, Icon, View } from "native-base";
import 'react-native-gesture-handler';

import {
  StyleSheet,ActivityIndicator,Switch
} from 'react-native';




class Movies extends Component {

    constructor(props){
      super(props);
      this.state={isLoading:true,}
    }
  
    async componentDidMount(){
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const responseJson = await response.json();
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {
        });
      }
      catch (error) {
        console.error(error);
      }
    }
  
  render(){
  
    if(this.isLoading){
      return(
        <View style={{flex: 1, padding:20}}>
           <ActivityIndicator color="#36FF0E" />
        </View>
      );
    }
  
    return(
     <>
         <Container>
          <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>
              <CardItem header bordered style = {misEstilos.body}>
                <Text style = {misEstilos.textCenter} >Peliculas</Text>
              </CardItem>
              <CardItem footer bordered style = { misEstilos.pie}>
              <FlatList
              data={this.state.dataSource}
              renderItem={({item})=>
              <Text>{item.title},{item.releaseYear}</Text>}
                keyExtractor={({id},index) => id}
           />
              </CardItem>
              <CardItem footer bordered style = { misEstilos.pie}>
            
              </CardItem>
              <CardItem footer bordered style = { misEstilos.pie}>
             
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
  export default Movies;