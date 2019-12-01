import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';




class Deck extends Component {

  delete = () => {
    const key = this.props.navigation.state.params.Details.name
    this.props.navigation.state.params.Dele(key)
    // removeDeck(key)
    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Home'
    }))

  }
  render() {
    const { navigation } = this.props;
    const key = this.props.navigation.state.params.Details.name

    const DecksDets = this.props.entries[key];

    if (typeof (DecksDets) === 'undefined') {
      return (
        <View>

          <TouchableOpacity onPress={() => this.toHome}>
            <Text>something went wrong please try again</Text>
          </TouchableOpacity>

        </View>
      )

    }


    return (
      <View styles={styles.container}>

        <Text style={styles.txt}> {DecksDets.name}</Text>
        <Text style={styles.txt}>{DecksDets.questions.length}</Text>
        <TouchableOpacity
          style={styles.AndroidSubmitBtn}
          onPress={() =>
            navigation.push('carAdd', {
              DecksAdd: DecksDets,
            })
          }>
          <Text style={styles.submitBtnText}>Add card</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.AndroidSubmitBtn}
            onPress={() =>
              navigation.push('quiz', {
                DecksQuiz: DecksDets,
              })
            }>
            <Text style={styles.submitBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.AndroidSubmitBtn} onPress={this.delete}>
          <Text style={styles.submitBtnText}>Delete Deck</Text>
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
export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  txt: {
    color: "#841584",
    // backgroundColor:'gray',
    fontSize: 22,
    textAlign: 'center',
  },
  AndroidSubmitBtn: {
    backgroundColor: 'blue',
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

})