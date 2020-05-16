import React , {Component} from 'react';
import logoGoogle from "../../Image/google.png";
import $ from "jquery";
import firebase from "../../firebaseConection";
import {Link , withRouter} from 'react-router-dom';

class Cadastrar extends Component {

    constructor(props){
        super(props);
        this.state={
            nome:"",
            email:"",
            senha:"",
            confirmeSenha:"",
            registre:"< Já tem uma conta? Entre "
        };

        

        this.logar = this.logar.bind(this);
        this.register = this.register.bind(this);

        this.registrado = this.registrado.bind(this);
    }
    logar(e){
        e.preventDefault();
        this.register();
    }

    register = async() =>{

        let nome = this.state.nome;
        let email = this.state.email;
        let senha = this.state.senha;
        let confirmeSenha = this.state.confirmeSenha;

        if(confirmeSenha === senha){
            try{
                await firebase.register(nome,email,senha);
                    this.setState({nome:"",email:"",senha:"",confirmeSenha:""});
                    this.registrado();               
            }
            catch(error){
                alert(error.message);
            }

        }
        else alert("Senhas diferentes!");

    }

    registrado(){
        alert("Registrado com Sucesso !");
        firebase.sair();
        this.props.history.replace('/');
    }



    render(){
        return (
        <div className="Login">
            <div className="backgroundLogin"></div>
            <div className="areaLogin">
                <div className="title">Registre-se</div>

                <div className="firebaseAuternativo">
                    <div className="googleLogin"> <img src={logoGoogle}/> Conectar com o google</div>
                </div>

                <div>- ou -</div>

                <form onSubmit={this.logar}>
                    <input type = "name" placeholder="Seu nome" onChange={(e)=>this.setState({nome: e.target.value})} />
                    <input type = "email" placeholder="Seu e-mail" onChange={(e)=>this.setState({email: e.target.value})} />
                    <input type = "password" placeholder="Sua senha" onChange={(e)=>this.setState({senha: e.target.value})} /> 
                    <input type = "password" placeholder="Confirme sua  senha" onChange={(e)=>this.setState({confirmeSenha: e.target.value})} /> 
                    <button>Registre-se</button>
                </form>
                <Link to="/" className="registre">{this.state.registre}</Link>
            </div>
        </div>
        );
    }

    componentDidMount(){
        
        // $(".firebaseAuternativo").click(function (e) {
        //     var provider = new firebase.auth.GoogleAuthProvider();
        //     firebase.auth().signInWithPopup(provider)
        //     .then(()=>this.conectado())
        //     .catch((e)=>alert(e.message));
        //     e.preventDefault();
            
        // });
    }


}

export default withRouter(Cadastrar);