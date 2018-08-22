import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import HomeScreen from '../Home/HomeScreen';

class TitleScreen extends Component{
    static navigationOptions = {
        headr: null
    }
        render() {
        return (
        <View style={{
                flex:1, 
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                borderColor: "transparent",
                backgroundColor: "#89cff0",
                borderWidth: 3,

        }
        }>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Button
                styles={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: "white",
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
                    color: 'black',
                  }}
                  title="TDO"
                vertical
                block={true}
                onPress={() => this.props.navigation.navigate('HomeScreen')}
            >
            <Text
            stlye={{
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
              color: 'black',
            }}
            >
                TODO
            </Text>
            </Button>
            <Button
            stlye={{
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
            title=''
            vertical
                block={true}
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text
            stlye={{
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
            >
                TODO
            </Text>
            </Button>
            </ScrollView>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#89cff0',
    borderWidth: 10,
    borderColor: "transparent",
    borderLeftWidth: 50,
    borderTopWidth: 100,
    borderBottomWidth: 100,
    borderRightWidth: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default TitleScreen;
