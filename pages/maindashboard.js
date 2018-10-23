import React from 'react';
import Link from 'next/link';
import logo from '../img/logo.png';
import './maindashboard.css';
 
export default class Header extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="top">
                    <img src={logo} alt="logo"/>
                    <h1>Nome: Teste</h1>
                    <h1>Ult. Acesso: 22/10/2018 11:32</h1>
                </div>
                <div className="dashboard-items">
                    <ul>
                        {/* ADD IMAGENS PARA CADA LINK */}
                        <li><Link href="#"><a>Administração</a></Link></li>
                        <li><Link href="#"><a>Faturas</a></Link></li>
                        <li><Link href="#"><a>Gestão Financeira</a></Link></li>
                        <li><Link href="#"><a>Nota Fiscal</a></Link></li>
                        <li><Link href="#"><a>Admistradora</a></Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}