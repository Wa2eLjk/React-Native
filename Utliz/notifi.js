
import {View,AsyncStorage} from 'react-native'
import { Notifications} from 'expo'
import * as Permissions from "expo-permissions";


const NOTICATION_KEY = 'Udacity:notifcations'

export function clearLocalNotifcation(){
AsyncStorage.removeItem(NOTICATION_KEY)
.then(AsyncStorage.cancelAllScheduledNotificationsAsync)
}
function createNotfication(){
    return{
        title: 'Hey you didnt do any quiz today',
        body:'Challenge your friends!',
        ios:{
            sound:true,
        },
        andriod:{
            sound:true,
            priority:'high',
            sticky:false,
            vibrate:true
        }
    }
}
export function setLocalNotfication(){
    AsyncStorage.getItem(NOTICATION_KEY).then(JSON.parse).then((data)=> {
        if(data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status})=>{
            if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
                let now = new Date()
                now.setDate(now.getDate())
                now.setHours(20)
                now.setMinutes(58)
                Notifications.scheduleLocalNotificationAsync(
                    createNotfication(),
                    {
                        time:now,
                        repeat:'day'
                    }
                )
                AsyncStorage.setItem(NOTICATION_KEY,JSON.stringify(true))
            }
            })
        }
    })
}
