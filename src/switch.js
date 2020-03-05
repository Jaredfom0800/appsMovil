import React,{Component} from 'react';
import {View,Switch,StyleSheet} from 'react-native';


export default SwitchEjemplo=(props) => {
    return(
        <View>
            <Switch onValueChange = {this.props.toggleSwitch1} value={this.props.switch1Value}/>
        </View>
    )
}