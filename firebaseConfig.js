// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3hsreCJ-HMkTG-7symrJH2G3keaitbNI',
  authDomain: 'safepainness.firebaseapp.com',
  projectId: 'safepainness',
  storageBucket: 'safepainness.appspot.com',
  messagingSenderId: '975399606056',
  appId: '1:975399606056:web:2cd63a020566068abd221d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
