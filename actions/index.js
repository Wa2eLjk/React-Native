export const ADD_DECK = 'ADD_DECK'
export const RECIEVE_ENTRY = 'RECIEVE-ENTRY'
export const ADD_DECK_ITEM = 'Add_DECK_ITEM'
export const DELETE_DECK = 'DELETE_DECK'

export function recieveEntry(entries) {
console.log('fetch' + JSON.stringify(entries))
  return {
    type: RECIEVE_ENTRY,
    entries
  }
}
export function addDeck(deck) {
  console.log(deck)
  return {
    type: ADD_DECK,
    deck
  }
}
export function addDeckItem(deck,key) {
  
  return {
    type: ADD_DECK_ITEM,
    deck,key
  }
}
export function removeSdeck(key){
  return{
    type: DELETE_DECK,
    key
  }
}