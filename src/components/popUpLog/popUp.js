import React, { Component } from 'react'

import {connect} from 'react-redux'
import {logIn, logOut} from '../../redux/action'

import './popUp.css'

class PopUp extends Component {

    state={
        login: '',
        password: '',
        button: 1
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value 
        })
    }

    render() {

        const {login, password} = this.state;
        const {popUp, logIn, logOut} = this.props;

        return (
            <div className={popUp ? 'modal active' : 'modal'}>
                <div className='modal-content'>
                    <form onSubmit = {(e) => {e.preventDefault();
                                        if(this.state.button === 1){logIn({ login, password })}
                                        if(this.state.button === 2){logOut()}}}>
                        <p>Введите данные</p>
                        <input type='text' name='login' placeholder='login' onChange = {this.handleChange}/>
                        <input type='text' name='password' placeholder='password' onChange = {this.handleChange}/>
                        <div className='btn'>
                            <button type='submit' name='btn1' onClick={() => (this.state.button = 1)}>Войти</button>
                            <button type='submit' name='btn2' onClick={() => (this.state.button = 2)}>Выйти</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({popUp}) => {
    return {popUp}
}

const mapDispatchToProps = {
    logIn, logOut
}

export default connect (mapStateToProps, mapDispatchToProps)(PopUp)