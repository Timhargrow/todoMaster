import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TitleScreen from './Component/Title/TitleScreen';
import HomeScreen from './Component/Home/HomeScreen';
import Create from './Component/CreateEdit/Create';
import Edit from './Component/CreateEdit/Edit';
import NotesScreen from './Component/Notes/NotesScreen';
import Alarm from './Component/Alarm/Alarm';
import SettingsScreen from './Component/Settings/SettingsScreen';
import CreateScreenNavigator from './Component/AdditionalNavigators/CreateScreenNavigator';
import { Icon } from 'native-base';


export default class App extends Component{  

  render(){
    return(
      <AppNavActivate />,
      <AppTab />

    );
  }
}



const AppNav = createStackNavigator({
  TitleScreen: {
    screen: TitleScreen
  },
  HomeScreen: {
    screen: HomeScreen
  },
  Create: {
    screen: Create
  },
  Edit: {
    screen: Edit
  },
  NotesScreen: {
    screen: NotesScreen
  },
  Alarm: {
    screen: Alarm
  },
  SettingsScreen:{
    screen: SettingsScreen
  },
  initialRouteName: 'HomeScreen'
  
  });

  class AppNavActivate extends Component {
  //  constructor(props){
  //    super(props);
  //    state = '';
  //  }
    render(){
      return(
        <AppNav navigation = {this.props.navigation} />
      );
    }
  }
  
  const MasterTab = createBottomTabNavigator ({
    TitleScreen: {
        screen: TitleScreen
    },
    HomeScreen: {
      screen: HomeScreen
    },
    NotesScreen: {
        screen: NotesScreen
    },
    SettingsScreen: {
        screen: SettingsScreen
    },
    Alarm: {
        screen: Alarm
    },
    })

    class AppTab extends Component{
      static router = MasterTab.router
      render(){
        return(
          <MasterTab navigation = {this.props.navigation} />
        );
      }
    }
