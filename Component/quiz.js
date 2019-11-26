import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button,Alert,ScrollView  } from 'react-native';




class Quiz extends Component {
  state = {
    correctAnswer: 0,
    wrongAnswer: 0,
    Total: 0,
  }

checking = (x) => {
Alert.alert('The Answer is ',x)
}
 increment = () => {
  this.setState(() => ({
    correctAnswer: this.state.correctAnswer + 1,
    Total: this.state.correctAnswer + this.state.wrongAnswer
  }))
  
 }
 decrement = () => {
  this.setState(() => ({
    wrongAnswer: this.state.wrongAnswer + 1,
    Total: this.state.correctAnswer + this.state.wrongAnswer
  }))
  
 }
 reset = () =>{
  this.setState(() => ({
    wrongAnswer:0,
    correctAnswer:0,
    Total: 0
  }))
  
 }
  render() {
    
    const DeckDeetails = this.props.navigation.state.params.DecksQuiz;
    const myArray = DeckDeetails.questions
    const Total = myArray.length
    
    console.log(this.state.Total)
    
    if (typeof (DeckDeetails) === 'undefined') {
      return (
        <View>
          <Text>Please add Cards to your decks its empty</Text>
        </View>
      )
    }
    if (this.state.Total === Total - 1) {
      return(
        <View style={styles.container}>
            <Text style={styles.txtQ}> you are done u scored {this.state.correctAnswer} out of {Total}</Text>
            <TouchableOpacity  style={styles.AndroidBtn} onPress={this.reset} >
                <Text style={styles.submitBtnText}>Reset Answers</Text>
              </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        
        <ScrollView>
        {Object.keys(myArray).map((x) => {
          const { answer, questiontxt } = myArray[x];
          const numIndex = +x + 1
          return (
            <View style={styles.box} key={answer}>
              <Text style={styles.txtQ}> question {numIndex} out of {Total} </Text>
              <Text style={styles.txt}>{questiontxt}</Text>

              <TouchableOpacity style={styles.AndroidBtn} onPress={() => this.checking(answer)}  >
                <Text style={styles.submitBtnText}>Show Answer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.AndroidCorrectBtn} onPress={ this.increment}  >
                <Text style={styles.submitBtnText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.AndroidFalseBtn} onPress={this.decrement}  >
                <Text style={styles.submitBtnText}>False</Text>
              </TouchableOpacity>
             



            </View>
          )
        })}
        
        </ScrollView>
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