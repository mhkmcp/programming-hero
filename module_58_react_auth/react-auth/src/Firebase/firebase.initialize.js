import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const firebaseInialization = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseInialization;