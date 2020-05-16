import React , {Component} from 'react';
import {Link , withRouter} from 'react-router-dom';
import firebase from '../../firebaseConection';


class Redefinir extends Component {

  constructor(props){
    super(props);
    this.state={email:""}

    this.redefinir = this.redefinir.bind(this);
  }

  redefinir(e){

    firebase.redefinir(this.state.email).then(()=>{
      alert("link enviado ao email com sucesso!");
      this.props.history.replace('/');
    }
    ).catch((e)=>{
      alert(e.message);
    }

    );

    e.preventDefault();
  }

  render(){
    return (
      <div className="Redefinir">
        <form onSubmit={this.redefinir}>
          <div className="title">Redefina sua senha</div>
          <input className="inPredefinir" type = "email" placeholder="Seu e-mail para redefinir senha" onChange={(e)=>this.setState({email: e.target.value})} />
            <button>Redefinir Senha</button>
            <Link to="/" className="lembrei">{"< Lembrei minha senha"} </Link>
        </form>
      </div>
    );
 }


}

export default withRouter(Redefinir);