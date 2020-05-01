import React from 'react'
import ReactDOM from 'react-dom'
import styled from './styled-components'

// Things to cover
//
// - What IS a styled component?!
// - What does it compile to?
// - Why does it prevent css name clashes
//
// - How to react/change on props
// - Themes!
//
// - Utility functions (withMargin)

const Box = styled.div`
  background: red;
  border: 20px solid black;
  height: 50px;
  width: 50px;
`

ReactDOM.render(<Box />, document.getElementById('root'))
