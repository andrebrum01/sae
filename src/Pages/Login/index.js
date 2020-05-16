import React , {Component} from 'react';
import '../../index.css';
import logoGoogle from "../../Image/google.png";
import $ from "jquery";
import firebase from "../../firebaseConection";
import {Link , withRouter} from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:"",
            senha:"",
            user:"",
            registre:"< Não tem uma conta? Registre-se "
        };
        
        

        // firebase.isInitialized().then(
        //     user =>{
        //         if(user){
        //             this.conectado();
        //         }
        //     }
        // );
            
        

        this.logar = this.logar.bind(this);
        // this.conectado = this.conectado.bind(this);
        this.entrar = this.entrar.bind(this);
    }
    entrar(e){

        e.preventDefault();

        this.logar();

    }

    logar = async()=>{
        
        let email = this.state.email;
        let senha = this.state.senha;
        
        try{
            await firebase.login(email,senha)
            this.props.history.replace('/painel');
            
        }
        catch(error){
            alert(error.message);
        }
        

    }
    

    render(){
        return (
        <div className="Login">
            <div className="backgroundLogin"></div>
            <div className="areaLogin">
                <div className="title">Faça Login</div>

                <div className="firebaseAuternativo">
                    <div className="googleLogin"> <img src={logoGoogle}/> Conectar com o google</div>
                </div>

                <div>- ou -</div>

                <form onSubmit={this.entrar}>
                    <input type = "email" placeholder="Seu e-mail" onChange={(e)=>this.setState({email: e.target.value})} />
                    <input type = "password" placeholder="Sua senha" onChange={(e)=>this.setState({senha: e.target.value})} /> 
                    <Link to="/Redefinir" className="redefinir">Esqueci a minha senha!</Link>
                    <button>Faça login</button>
                </form>
                <Link to="/Cadastrar" className="registre">{this.state.registre}</Link>
            </div>
        </div>
        );
    }

    componentDidMount(){
        if(firebase.getCurrent()){
            return this.props.history.replace('/painel');
        }
    
        // $(".firebaseAuternativo").click(function (e) {
        //     alert(firebase.googleLogin());

        //     e.preventDefault();
        // });

    }


}

export default withRouter(Login);