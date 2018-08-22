import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Alt from '../../../Alt';

export default class Create2 extends Component{
  constructor(props){
    super(prop);
    
    this.state = {
        notes: '',
        allNotes: '',
        newNotes: '',
        editNote: '',
    }
  }
  handleClick(){
      const notes = this.state.notes.dispatch;
      const allNotes= this.state.allNotes.dispatch;
      const newNotes= this.state.newNotes.dispatch;
      const editNote= this.state.editNote.dispatch;

      this.setState({notes:notes});
  }
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Text>
        Let's Get Started!
        </Text>
        <TextInput
        style={{height: 40}}
        placeholder="Input your title"
        onChangeText={(newNotes) => this.dispatch({Alt})
        }
        />
        {/* {this.setState.text.('')}  */}
        <Button
            vertical
            onPress= {() => this.props.navigation.navigate('NotesScreen')}
        >
        </Button>       
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
    borderWidth: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
