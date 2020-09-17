import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Words from './Words'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Words text="Words List" />
    </React.Fragment>
  )
}