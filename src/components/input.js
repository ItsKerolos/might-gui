import React from 'react';

import PropTypes from 'prop-types';

import { createStyle } from 'flcss';

import getTheme from '../colors.js';

const colors = getTheme();

/**
* @param { {
*    inputRef: React.RefObject
*    defaultValue: string,
*    valid: boolean,
*    autoFocus: boolean,
*    onChange: (newValue: string) => string
*  } } param0
*/
const Input = ({ inputRef, defaultValue, valid, autoFocus, onChange }) =>
{
  if (valid === undefined)
    valid = true;
  
  const change = (e) =>
  {
    if (onChange)
      onChange.call(undefined, e.target.value);
  };

  return <div className={ styles.container }>
    <input
      ref={ inputRef }
      valid={ valid.toString() }
      spellCheck={ false }
      autoComplete={ 'off' }
      autoFocus={ autoFocus }
      className={ styles.input }
      defaultValue={ defaultValue }
      type={ 'text' }
      onInput={ change }
    />
  </div>;
};

Input.propTypes = {
  inputRef: PropTypes.any,
  valid: PropTypes.bool,
  defaultValue: PropTypes.any,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func
};

const styles = createStyle({
  container: {
    display: 'flex',
    backgroundColor: colors.whiteBackground,

    width: '100%',
    height: '40px'
  },

  input: {
    flexGrow: 1,

    fontSize: '14px',
    fontFamily: 'Noto Sans',
    fontWeight: 700,

    padding: '10px',

    border: 0,
    borderBottom: `${colors.blackText} 1px solid`,

    transition: 'border-bottom 0.1s',

    ':focus': {
      outline: 0
    },

    '[valid="false"]': {
      borderBottom: `${colors.red} 3px solid`
    },

    '[valid="true"]:focus': {
      borderBottom: `${colors.blue} 3px solid`,
    }
  }
});

export default Input;