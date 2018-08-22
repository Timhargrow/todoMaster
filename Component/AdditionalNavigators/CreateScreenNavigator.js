import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Footer, FooterTab} from 'native-base';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../Home/HomeScreen';
import SettingsScreen from '../Settings/SettingsScreen';
import NotesScreen from '../Notes/NotesScreen';

var CreateScreenNavigator = createStackNavigator({

    NotesScreen:{
      screen: NotesScreen
    }, initialRouteName: 'NotesScreen'
  },{
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <View>
        <Footer>
          <FooterTab>
            <Button
            vertical
            onPress= {()=> this.props.navigation.navigate('NotesScreen')}
            >
            <Icon name="ios-add" />
            </Button>
          </FooterTab>
        </Footer>
        </View>
      )
    }
  })

  export default CreateScreenNavigator;