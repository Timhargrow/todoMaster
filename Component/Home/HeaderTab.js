import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Footer, FooterTab} from 'native-base';
import {createBottomTabNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

export default class HeaderTab extends Component{
    render() {
      return (
        <View style={styles.container}>
          <Text>
          HeaderTab  
          </Text>
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
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
  