
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { fetchEntry, removeDeck } from '../Utliz/api';
// import Deck from './deck'

import { connect } from 'react-redux';
import { recieveEntry, removeSdeck } from '../actions/index'



class HomeScreen extends Component {
    componentDidMount() {
        fetchEntry().then((entries) => this.props.dispatch(recieveEntry(entries)))
        
    }
    handleDelete(obj) {
        this.props.dispatch(removeSdeck(obj))
        removeDeck(obj)
    }
    render() {
        
        const deckInfos = this.props.entries
       
        return (
            <View style={styles.container}>
                {Object.keys(deckInfos).map(key => {
                    const { name, questions } = deckInfos[key];
                    
                    return (
                        <TouchableOpacity
                            key={key}
                            onPress={() =>
                                this.props.navigation.navigate('Details', {
                                    Details: deckInfos[key],
                                    Dele:  this.handleDelete.bind(this)
                                    
                                })
                            }>
                            <View style={styles.box} key={key}>
                           
                                <Text style={styles.txt}>{name}</Text>
                               
                              
                                <Text style={styles.txt}>{questions.length}</Text>
                                <Text />
                            </View>
                        </TouchableOpacity>
                    );
                })}

            </View>
        );
    }
}



function mapStateToProps(entries) {
    return {
        entries
    }
}

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      backgroundColor: 'white',
      
     
    },
    txt:{
        color:"#841584",
        fontSize: 22,
        textAlign: 'center',
      },
      box:{
        paddingLeft:10,
        marginBottom:10, 
        borderWidth:1,
        borderStyle: 'solid',
        borderColor:'red',
        borderTopColor:'white',
        borderRadius:1
      }
   
})