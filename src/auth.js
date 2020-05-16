import firebase from "./firebaseConection";


const autenticado = ()=>{
    var aut=true;
    firebase.isInitialized().then(user =>{
        if(user)
            aut= true;
        else
            aut= false;
    });

    return aut;
}

export default autenticado;