import React , {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from './Pages/Login';
import Erro from './Pages/Erro';
import Redefinir from './Pages/Redefinir';
import Cadastrar from './Pages/Cadastrar';
import Painel from './Pages/Painel';

import autenticado from './auth';


// var PrivateRoute = ({component : Component , ...rest})=>(
//     <Route {...rest}  render ={props => (
//         aut ? 
//         (
//             <Component {...props}/>
//         )
//         : 
//         (
//             <Redirect to={{pathname:'/asdasd'}} /> 
//         )
//     )} />

// );

class Routes extends Component {
    constructor(props){
        super(props);
        this.state={aut:""};
    }

    render(){
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/redefinir" component={Redefinir}/>
                <Route exact path="/cadastrar" component={Cadastrar}/>
                <Route exact path="/painel" component={Painel}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
        );
       
    }



}

export default Routes;