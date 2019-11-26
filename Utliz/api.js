import { AsyncStorage } from 'react-native'
import entries from '../reducers'

const STORAGE_KEY = 'UdacitCard:flash'

export function submitQuestions({entry,key}){
  return AsyncStorage.getItem(STORAGE_KEY)
  .then((result)=>{
    const data = JSON.parse(result)
   
     data[key].questions.push(entry)

     AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(data))
  })
}

export function submitDeck({ entry, key }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}
export function removeDeck(key) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((result) => {
      const data = JSON.parse(result)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}

export function fetchEntry() {

  return AsyncStorage.getItem(STORAGE_KEY).then((data) => JSON.parse(data))
}
export function removeall(){
  return AsyncStorage.clear()
}