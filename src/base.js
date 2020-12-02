import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database' 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACCQ7B6eBR35hE6_iWJV2RyY0zi39n-FI",
    authDomain: "chatbox-app-c849c.firebaseapp.com",
    databaseURL: "https://chatbox-app-c849c.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base 