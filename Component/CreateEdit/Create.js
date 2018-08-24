import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {Footer, FooterTab, Button, Icon} from 'native-base';

import HomeScreen from '../Home/HomeScreen';
import NotesScreen from '../Notes/NotesScreen';

class Cancel extends Component{
  render(){
      return (
        <Button 
        onPress={()=>{
          this.onPress
        }
        }
        style={{
          backgroundColor: 'red',
          marginLeft: 15,
          marginRight: 15,
          marginTop: 20,
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 20,
          paddingBottom: 20,
          flex:1,
          borderColor: 'black',
          borderWidth: 1,
         }}
        >
        <Text
        style={{
          flex: 2,
          flexWrap: 'nowrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'red',
          color: 'black',
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
        >
          Cancel
        </Text>
        </Button>

      );
    }
  }


  
//   render(){
//     return(
//         <Button 
//         onPress={()=>{
//           this.onPress
//         }
//         }
//         style={{
//           backgroundColor: 'red',
//           marginLeft: 15,
//           marginRight: 15,
//           marginTop: 20,
//           marginBottom: 20,
//           paddingLeft: 5,
//           paddingRight: 5,
//           paddingTop: 20,
//           paddingBottom: 20,
//           flex:1,
//           borderColor: 'black',
//           borderWidth: 1,
//          }}
//         >
//         <Text
//         style={{
//           flex: 2,
//           flexWrap: 'nowrap',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           alignContent: 'center',
//           backgroundColor: 'red',
//           color: 'black',
//           paddingTop: 20,
//           paddingBottom: 20,
//           paddingLeft: 10,
//           paddingRight: 10,
//           marginTop: 20,
//           marginBottom: 20,
//           marginLeft: 10,
//           marginRight: 10,
//         }}
//         >
//           Cancel
//         </Text>
//         </Button>

//     );
//   }
// }

class Save extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <Button
        onPress={()=>{
          this.onPress
        }
        }
        style={{
         backgroundColor: 'green',
         marginLeft: 15,
          marginRight: 15,
          marginTop: 20,
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 20,
          paddingBottom: 20,
          flex:1,
          borderColor: 'black',
          borderWidth: 1,
        }}
        >
        <Text
        style={{
          flex: 5,
          flexWrap: 'nowrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'green',
          color: 'black',
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 10,
          paddingRight: 40,
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 10,
          marginRight: 20,
        }}
        >
          Save
        </Text>
        </Button>
    );
  }
}

class Input extends Component{
  constructor(props){
    super(props);
    // this.state = {index:[0]}
  }
  render() {
    return (
        <TextInput
        {...this.props}
        editable = {true}
        maxLength = {50}
        style={{
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 10,
          paddingBottom: 10,
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 100,
          marginRight: 100,
          borderColor: 'black',
          borderWidth: 1,
          flex: 1,
          flexWrap: 'nowrap',
          flexDirection: 'column',
          alignContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}
        />
    );
  }
}

class InputBody extends Component{
  constructor(props){
    super(props);
    // this.state = {index:[1]}
  }
  render(){
    return(
      <TextInput
      {...this.props}
      editable = {true}
      maxLength = {50}
      style={{
        paddingTop: 10,
        paddingBottom: 80,
        paddingLeft: 50,  
        paddingRight: 50,
        marginTop: 20,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      />
    );
  }
}
export default class Create extends Component{
  constructor(props){
    super(props);
    this.state = {
      text:'Input your title',
      text2: 'Input your notes'
    };
  }
  render(){
    return(
      <View
      style={{
        flex: 2,
        flexWrap: 'nowrap',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        alignContent: 'stretch',

      }}
      >
        <View
        style = {{
          flex: 1,
          flexWrap: 'nowrap',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',

        }}
        >
        <Input
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
          />
        <InputBody
          multiline = {true}
          numberOfLines = {20}
          onChangeText={(text2)=> this.setState({text2})}
          value={this.state.text2}
          />
          </View>
          <View
          style={{
            flex:1,
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-around',
          }}
          >
        <Save/>
        <Cancel />
        </View>
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
    borderWidth: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  createBox: {
    height: 20,
    borderColor: 'gray', 
    borderWidth: 1
  },
});
