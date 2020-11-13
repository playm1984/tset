import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import {connect} from 'react-redux'
import {showPopUp, fillterNews} from '../../redux/action'

import './header.css'

class Header extends Component {

    render() {

        const {showPopUp, fillterNews} = this.props;

        return (
            <div className='window'>
                <div className='header'>
                    <div className='menu'>
                        <Link to={'/'} className='btn' href='#'><p>Главная</p></Link>
                        <Link to={'/news'} className='btn' href='#' onClick={fillterNews}><p>Новости</p></Link>
                    </div>
                    <Link to={'/'} className='btn-l' href='#' onClick={showPopUp}><p>Вход/Выход</p></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return{}
}

const mapDispatchToProps = {
    showPopUp, fillterNews
}

export default connect (mapStateToProps, mapDispatchToProps)(Header)