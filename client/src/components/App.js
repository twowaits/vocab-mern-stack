import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Header from './Header'
import Words from './Words'
import Search from './Search'
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
          <Switch>
            <Route exact path='/'>
              <Header />
              <Words text="Words List" />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
          </Switch>
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