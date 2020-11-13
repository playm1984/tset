import React, { Component } from 'react'

import {connect} from 'react-redux'

class Main extends Component {
    render() {

        const {usersNow} = this.props;

        return (
            <div className='main'>
                {usersNow ? <h1 className='user'>Привет {usersNow.titleName}</h1> : <h1 className='user'>Привет, гость</h1>}
            </div>
        )
    }
}

const mapStateToProps = ({usersNow}) => {
    return{usersNow}
}

export default connect (mapStateToProps)(Main)
