import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => <button>{children}</button>

Button.defaultProps = {
  children: 'Salvar'
}

Button.defaultTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button
