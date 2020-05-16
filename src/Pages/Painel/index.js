import React , {Component} from 'react';
import firebase from '../../firebaseConection';
import {withRouter} from 'react-router-dom';



class Painel extends Component {

  constructor(props){
    super(props);
    this.state={email:""};

    this.sair = this.sair.bind(this);
  }

  sair(){
    firebase.sair();
    this.props.history.replace('/');
  }

  componentWillMount(){
    if(!firebase.getCurrent()){
      return this.props.history.replace('/');
    }
  }


  render(){
    return (
      <div className="Painel">
           Painel<br/><br/>
           {this.state.email}
          <button onClick={this.sair}>sair</button>
      </div>
    );
 }

 componentDidMount(){
   
 }



}

export default withRouter(Painel);