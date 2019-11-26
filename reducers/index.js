import { RECIEVE_ENTRY, ADD_DECK, ADD_DECK_ITEM,DELETE_DECK } from '../actions/index'
import {omit} from 'lodash'

function entries(state = {}, action) {
  switch (action.type) {
    case RECIEVE_ENTRY:

      return {
        ...state,
        ...action.entries
      }
    case ADD_DECK:
      
      return {
        ...state,
        ...action.deck
      }
    case ADD_DECK_ITEM:

      const arr = action.deck.key
      return {
        ...state,
        [action.deck.key]: {
          ...state[action.deck.key],
          questions: [
            ...state[arr].questions,
            action.deck.entry
          ]
        }
      }
     case DELETE_DECK:
      
       const oldState = Object.assign({},state)
      
        delete oldState[action.key]
        console.log('STATE : '+JSON.stringify(oldState))
       
      return {
        
        ...oldState
      }
       
       
    

    default:
      return state
  }
}

export default entries