import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { login } from '../actions/actions'

function UserLogin(props) {
  function handleSubmit(event) {
    event.preventDefault()

    const username = event.target.children.username.value
    const password = event.target.children.password.value

    props.login(username, password)
  }

  return (
    <div className="UserLogin">
      <form onSubmit={handleSubmit.bind(this)}>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text"/>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password"/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserLogin);
