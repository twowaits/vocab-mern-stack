import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Header from './Header'
import Words from './Words'
import Search from './Search'
import { SnackbarProvider } from 'notistack'
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
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
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
        </SnackbarProvider>
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