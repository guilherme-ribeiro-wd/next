import React from 'react';
import { FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faLock, faSignInAlt);

// const formStyle = {
//     width: '30%',
//     display: 'inline',
// }

// const labelStyle = {
//     marginRright: 5
// }

export default class Index extends React.Component {
    state = {
        usuario: '',
        senha: '',
    }

    change = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validaLogin = () => this.state.usuario !== '' && this.state.senha !== '';

    render() {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
                </Head>
                <form className="form-login" onSubmit={this.validaLogin} align="center">
                    <FormGroup controlId="user-usuario">
                        <ControlLabel style={labelStyle}>Usuário</ControlLabel>
                        <FormControl name="usuario" type="text" placeholder="Usuário"
                        value={this.state.usuario} onChange={e => this.change(e)} style={formStyle}/>
                    <FontAwesomeIcon icon="user" />
                    </FormGroup>

                    <FormGroup controlId="user-senha">
                        <ControlLabel style={labelStyle}>Senha</ControlLabel>
                        <FormControl type="password" name="senha" placeholder="Senha"
                        value={this.state.senha} onChange={e => this.change(e)} style={formStyle}/>
                        <FontAwesomeIcon icon="lock"/>
                    </FormGroup>

                    <Button type="button" id="btn-login">Entrar</Button>
                    <FontAwesomeIcon icon="sign-in-alt"/>
                </form>
            </div>
        );
    }
}