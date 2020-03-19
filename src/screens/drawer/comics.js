import React, { Component } from 'react';
import {Text, Button,Image,TouchableHighlight,FlatList} from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';
import { Container,  Content, Card, CardItem, Body, Item, Label, Input, Icon, View } from "native-base";
import 'react-native-gesture-handler';


import {
  StyleSheet,ActivityIndicator,Switch
} from 'react-native';

var Crypto = require('react-native-crypto-js');

const REQUEST_URL ="https://gateway.marvel.com:443/v1/public/characters";


class Comics extends Component {

constructor(props){
  super(props)
  this.timestamp =1;
  this.public_key='fec608dfd4a7a9acb339c68e2264d7cf';
  this.private_key='628e667fed05720e19ca63e3753e7aedc6b7a86f';
    this.state={isLoading:true,}

}
  //componentDidMount(){
  //  this.fetchData();
  //}
 /* async componentDidMount(){
    try {
      const response = await  fetch(REQUEST_URL+'?ts='+this.timestamp+'&apkey='+this.public_key+'&hash'+hash)
      .then((response)=> response.json())
      .then((responseData)=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
          loaded: true
        })
      });
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


}*/    



fetchData(){
  var hash = Crypto.MD5(this.timestamp+this.private_key+this.public_key);
  fetch(REQUEST_URL+'?ts='+this.timestamp+'&apkey='+this.public_key+'&hash'+hash)
  .then((response)=> response.json())
  .then((responseData)=>{
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
      loaded: true
    })
  })
}
    
renderLoadingView(){
  return(
    <View>
      <Text>Caragando...</Text>
    </View>
  )
}

renderComic(comic){
  return(
    <TouchableHighlight>
      <Image source={{url: comic.thumbnail.path+'jpg'}}>
        <View>
         <Text>{comic.name}</Text>
        </View>
      </Image>
    </TouchableHighlight>
  )
}

render(){
  if(!this.state.loaded){
    return this.renderLoadingView();
  }
  return(
    <FlatList
              data={this.state.dataSource}
              renderItem={({item})=>
              <Text>{item.title},{item.releaseYear}</Text>}
                
           />
  )
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
  export default Comics;