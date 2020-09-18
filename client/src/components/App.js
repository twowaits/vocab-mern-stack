import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Words from './Words'
import { handleInitialData } from '../actions/word'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Words text="Words List" />
        </Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (words) => {
  return {
    words
  }
}

export default connect(mapStateToProps, { handleInitialData })(App)