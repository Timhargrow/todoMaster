import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Icon, Footer, FooterTab} from 'native-base';
import {createBottomStackNavigator, createStackNavigator} from 'react-navigation';


import Create from '../CreateEdit/Create';
import NotesScreen from '../Notes/NotesScreen';
import Alarm from '../Alarm/Alarm';
import HomeScreen from './HomeScreen';

export default class HomeScreenNavUI 
extends Component{
    render(){
        return(
            <View
            style={{
              flex:1, 
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              borderColor: "transparent",
              backgroundColor: "#89cff0",
              borderWidth: 3,

            }}
            >
            <ScrollView contentContainerStyle={styles.contentContainer}>
          
            <Button
            style={{
              flex: -1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: "transparent",
              borderLeftWidth: 1,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              textSize: 10,
              padding: 90,
              marginTop: 50,
              marginBottom: 1,
              paddingTop: 50,
              paddingBottom: 50,
              paddingLeft: 156,
              paddingRight: 156,
              alignContent:'flex-end',
              flexBasis: 20,
            }}
              title="CREATE"
            vertical
            onPress= {() => this.props.navigation.navigate('Create')}
            >
           <Text
           
            >
               CREATE3!!!
           </Text>
            </Button>

            <Button
            style={{
              flex: -1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: "transparent",
              borderLeftWidth: 1,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              fontSize: 50,
              padding: 90,
              marginTop: 1,
              marginBottom: 1,
              paddingTop: 50,
              paddingBottom: 50,
              paddingLeft: 160,
              paddingRight: 160,
            }}
            vertical
            onPress= {() => this.props.navigation.navigate('NotesScreen')}
            >
            <Text>
            Notes 
            Screen
            </Text>
            </Button>
            
            <Button
            style={{
              flex: -1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: "transparent",
              borderLeftWidth: 1,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              textSize: 10,
              padding: 90,
              marginTop: 1,
              marginBottom: 50,
              paddingTop: 50,
              paddingBottom: 50,
              paddingLeft: 160,
              paddingRight: 160,
              }}
            vertical
            onPress= {() => this.props.navigation.navigate('Alarm')}
            >
           <Text
           
           >
               Alarm
           </Text>
            </Button>

              </ScrollView>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
