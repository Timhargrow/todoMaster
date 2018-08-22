import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Edit extends Component{
  render() {
    return (
      <View style={{
        flex:1, 
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: "transparent",
        backgroundColor: "#89cff0",
        borderWidth: 3,

      }}>
        <Text>
        Save
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
