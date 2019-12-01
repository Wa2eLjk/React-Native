import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { addDeckItem } from '../actions/index';
import { submitQuestions } from '../Utliz/api';
import { connect } from 'react-redux';


class AddCard extends Component {
  state = {
    textQuestion:'',
    textAnswer:'',
  }
  submit = (DeckDeetails) => {
    if (this.state.textQuestion ==='' || this.state.textAnswer === '') {
      Alert.alert('You must enter a value in question AND answer')
    }else{

    
   let entry ={}
   entry['questiontxt'] = this.state.textQuestion
   entry['answer'] = this.state.textAnswer
     
     const key = DeckDeetails.name
    
     this.props.dispatch(addDeckItem({
      entry,
      key
     }))
     submitQuestions({key,entry})
   this.toDeck()
  }
  }
  toDeck = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Details'
    }))

  }
  render() {
    
    const deckDeetails = this.props.navigation.state.params.DecksAdd;
    
    return (
      <View >
        <Text style={styles.txt}>your key is : {deckDeetails.name}</Text>

        <TextInput
          onChangeText={(textQuestion) => this.setState({textQuestion})}
          placeholder="Question"
          autoFocus ={true}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        
        <TextInput
          onChangeText={(textAnswer) => this.setState({textAnswer})}
          placeholder="Answer"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />

        <TouchableOpacity
          style={styles.AndroidSubmitBtn}
          onPress={() => this.submit(deckDeetails)}>
          
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddCard)

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