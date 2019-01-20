import firebase from 'firebase/app'
import 'firebase/database'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAIbrEIoYZQNq-CJaSwR570L14mRv0Mk08',
    authDomain: 'goodquestion-844fa.firebaseapp.com',
    databaseURL: 'https://goodquestion-844fa.firebaseio.com',
    projectId: 'goodquestion-844fa',
    storageBucket: 'goodquestion-844fa.appspot.com',
    messagingSenderId: '925513728206'
  }

  firebase.initializeApp(config)
}

const fireDb = firebase.database()

export { fireDb }
