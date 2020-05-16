import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig ={
  apiKey: "AIzaSyCrUlaMXxLqWm4mNduhPKnXqFM1ZBf3Q54",
  authDomain: "saee-4ce7e.firebaseapp.com",
  databaseURL: "https://saee-4ce7e.firebaseio.com",
  projectId: "saee-4ce7e",
  storageBucket: "saee-4ce7e.appspot.com",
  messagingSenderId: "354215714072",
  appId: "1:354215714072:web:d38314b96d535bab57526d",
  measurementId: "G-4WRWM75HTG"
};

class Firebase {

  constructor(){
    firebase.initializeApp(firebaseConfig);
    firebase.auth().languageCode = 'pt';
  }

  login(email,senha){
    return firebase.auth().signInWithEmailAndPassword(email,senha);
  }

  async register(nome,email,senha){
    await firebase.auth().createUserWithEmailAndPassword(email,senha);
    const uid = firebase.auth().currentUser.uid;
    return firebase.database().ref("user").child(uid).set({
      nome:nome,
      nivel:"avaliador"
    });

  }
  
  sair(){
    firebase.auth().signOut();
  }

  user(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
        this.email = user.email;
      else
        this.email = "ngm logado";
    });

  }

  redefinir(email){
    let auth = firebase.auth();
    return auth.sendPasswordResetEmail(email);
  }

  googleLogin(){

      var provider = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithPopup(provider);
 
  }

  isInitialized(){

    return new Promise( resolve => {
      firebase.auth().onAuthStateChanged(resolve);
    });
    
  }

  getCurrent(){
    return firebase.auth().currentUser && firebase.auth().currentUser.email;
  }
}
export default new Firebase();