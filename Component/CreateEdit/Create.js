import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import CreateScreenNavigator from '../AdditionalNavigators/CreateScreenNavigator';

import NotesScreen from '../Notes/NotesScreen';

// var CreateScreenNavigator = createStackNavigator({

//   NotesScreen:{
//     screen: NotesScreen
//   }, CreateScreenNavigator: {
//     screen: CreateScreenNavigator
//   },
//   initialRouteName: 'NotesScreen'},{
  
//   tabBarPosition: 'bottom',
//   tabBarComponent: props => {
//     return (
//       <Footer>
//         <FooterTab>
//           <Button
//           vertical
//           onPress= {()=> this.props.navigation.navigate('NotesScreen')}
//           >
//           <Icon name="ios-add" />
//           </Button>
//         </FooterTab>
//       </Footer>
//     )
//   }
// })


export class Input extends Component{
  render() {
    return (
        <TextInput
        {...this.props}
        editable = {true}
        maxLength = {40}
        />      

    );
  }
}

export default class Create extends Component{
  constructor(props){
    super(props);
    this.state = {
      text:'Input your title'
    };
  }
  render(){
    return(
      <View style = {{
        backgroundColor: this.state.text,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
        <Input
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
          />
          <CreateScreenNavigator />
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
  createBox: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1
  },
});
