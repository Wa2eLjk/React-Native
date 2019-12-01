import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { submitDeck, removeDeck, removeall } from '../Utliz/api';
import { connect } from 'react-redux';
import { addDeck, removeSdeck } from '../actions/index';
import {NavigationActions } from 'react-navigation';

class HomeScreen extends Component {
  state = {
    name: '',
    questions: [],
  };
  submit = () => {
    const key = this.state.name;
    const entry = this.state;

    this.props.dispatch(
      addDeck({
        [key]: entry,
      })
    );
    submitDeck({ key, entry });

    this.setState(() => ({
      name: '',
      questions: [],
    }));
    this.toDeck()
  };
  handleDelete(obj) {
    this.props.dispatch(removeSdeck(obj))
    removeDeck(obj)
}
  toDeck = () =>{
    
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName:'Details',
      params:{
      Details: {name:this.state.name, questions:[]},
      Dele:  this.handleDelete.bind(this)
    }
    }))
  }

  render() {
    
    return (
      <View style={styles.container}>
        
        <Text style={styles.txt}>What is the title of your new deck ?</Text>
        <TextInput
          onChangeText={name => this.setState({ name })} value={this.state.name}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter the name of your new deck"
        />

        <TouchableOpacity
          style={styles.AndroidSubmitBtn}
          onPress={this.submit}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}
function mapStateToProps(entries) {
  return {
    entries
  }
}
export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    color:"#841584",
    // backgroundColor:'gray',
    fontSize: 22,
    textAlign: 'center',
  }, 
    AndroidSubmitBtn: {
      backgroundColor: 'blue',
      color:"#841584",
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width:250,
      margin: 20
    },
   submitBtnText: {
      color: 'white',
      fontSize: 22,
      textAlign: 'center',
    },
});

