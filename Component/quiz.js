import React, { Component, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { setLocalNotfication, clearLocalNotifcation } from './notifi'
import { connect } from 'react-redux'
import { recieveEntry } from '../actions/index'
import { fetchEntry } from '../Utliz/api';


class Quiz extends Component {
  state = {
    correctAnswer: 0,
    wrongAnswer: 0,
    Total: 0,
    current: 0,
    all: 0,
    notifi: true,

  }
  componentDidMount() {
    // const DeckDeetails = this.props.navigation.state.params.DecksQuiz.questions.length;
    // const myArray = DeckDeetails.questions
    // const Total = myArray.length

    this.setState(() => ({
      all: this.props.navigation.state.params.DecksQuiz.questions.length
    }))
  }
  checking = (x) => {
    Alert.alert('The Answer is ', x)
  }
  increment = () => {

    this.setState(() => ({
      correctAnswer: this.state.correctAnswer + 1,
      Total: this.state.correctAnswer + this.state.wrongAnswer,
      notifi: false,
      current: this.state.current + 1
    }))


  }


  decrement = () => {

    this.setState(() => ({
      wrongAnswer: this.state.wrongAnswer + 1,
      Total: this.state.correctAnswer + this.state.wrongAnswer,
      notifi: false,
      current: this.state.current + 1
    }))


  }

  reset = () => {
    this.setState(() => ({
      wrongAnswer: 0,
      correctAnswer: 0,
      Total: null,
      current:0
    }))

  }

  render() {
    console.log('All',this.state.all)
    console.log('Current',this.state.current)
    const time = new Date().setHours(20, 0, 0)
    if (this.state.notifi === true && time === true) {
      setLocalNotfication()

    }
    else if (this.state.notifi === false) {
      clearLocalNotifcation()
    }

    const DeckDeetails = this.props.navigation.state.params.DecksQuiz;
    const myArray = DeckDeetails.questions[this.state.current]
    



    if (typeof (DeckDeetails) === 'undefined') {
      return (
        <View>
          <Text>Please add Cards to your decks its empty</Text>
        </View>
      )
    }

    if (this.state.current === this.state.all) {
      return (
        <View style={styles.container}>
          <Text style={styles.txtQ}> you are done u scored {this.state.correctAnswer} out of {this.state.all}</Text>
          <TouchableOpacity style={styles.AndroidBtn} onPress={this.reset} >
            <Text style={styles.submitBtnText}>Reset Answers</Text>
          </TouchableOpacity>
        </View>
      )
    }


    return (
      <View style={styles.container}>


        <View style={styles.box} key={this.state.current}>

          <Text style={styles.txtQ}> question {this.state.current +1} out of {this.state.all} </Text>
          <Text style={styles.txt}>{myArray.questiontxt}</Text>

          <TouchableOpacity style={styles.AndroidBtn} onPress={() => this.checking(myArray.answer)}  >
            <Text style={styles.submitBtnText}>Show Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.AndroidCorrectBtn} onPress={this.increment}  >
            <Text style={styles.submitBtnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.AndroidFalseBtn} onPress={this.decrement}  >
            <Text style={styles.submitBtnText}>False</Text>
          </TouchableOpacity>

        </View>


      </View>
    )

  }
}

export default (Quiz)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: "#841584",
    // backgroundColor:'gray',
    fontSize: 19,
    textAlign: 'center',
  },
  txtQ: {
    color: "#841584",
    // backgroundColor:'gray',
    fontSize: 25,
    textAlign: 'center',
  },
  AndroidBtn: {
    backgroundColor: 'blue',
    color: "#841584",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    margin: 20
  },
  AndroidCorrectBtn: {
    backgroundColor: 'green',
    color: "#841584",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    margin: 20
  },
  AndroidFalseBtn: {
    backgroundColor: 'red',
    color: "#841584",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    margin: 20
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  box: {
    paddingLeft: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    borderTopColor: 'white',
    borderRadius: 1
  }
})