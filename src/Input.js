import React, {Component, PropTypes, Children, cloneElement} from 'react'
import InputLabel from './InputLabel'
import classNames from 'classnames'
import InputHelpText from './InputHelpText'
import InputErrors from './InputErrors'

export default class Input extends Component {

  static defaultProps = {
    type: 'text',
  }

  render() {
    const {className, error, ...props} = this.props
    const inputClassName = classNames(className, {
      'is-invalid-input': !!error,
    })
    return (
      <input className={inputClassName} {...props} />
    )
  }
}

class InputStack extends Component {
  render() {
    const {error, help, className, label, ...props} = this.props

    return (
      <InputLabel className={className} error={error}>
        {label}
        <Input {...props} error={error} />
        <InputHelpText>{help}</InputHelpText>
        <InputErrors>{error}</InputErrors>
      </InputLabel>
    )
  }
}
Input.Stack = InputStack