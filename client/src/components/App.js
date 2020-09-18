import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Header from './Header'
import Words from './Words'
import { handleInitialData } from '../actions/word'

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Kumbh Sans', sans-serif",
  }
})

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Words text="Words List" />
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (words) => {
  return {
    words
  }
}

export default connect(mapStateToProps, { handleInitialData })(App)