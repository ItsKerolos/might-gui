import React from 'react';

import PropTypes from 'prop-types';

import { createStyle } from 'flcss';

import getTheme from '../colors.js';

const colors = getTheme();

/**
* @param { {
*    defaultValue: string,
*    suffix: string,
*    onChange: (newValue: string) => string
*  } } param0
*/
const Input = ({ defaultValue, suffix, onChange }) =>
{
  const change = (e) =>
  {
    if (onChange)
      onChange.call(undefined, e.target.value);
  };

  return <div className={ styles.container }>
    <input className={ styles.input } spellCheck={ false } defaultValue={ defaultValue } type={ 'text' }  onInput={ change }/>
    <div className={ styles.suffix }>{ suffix }</div>
  </div>;
};

Input.propTypes = {
  defaultValue: PropTypes.any,
  suffix: PropTypes.string,
  onChange: PropTypes.func
};

const styles = createStyle({
  container: {
    display: 'flex',
    backgroundColor: colors.whiteBackground,

    height: '40px',

    borderRadius: '5px',
    border: `${colors.blackText} 1px solid`
  },

  input: {
    flexGrow: 1,

    fontSize: '14px',
    fontFamily: 'Noto Sans',
    fontWeight: 700,

    border: 0,
    padding: 0,
    margin: '10px',

    ':invalid': {
      borderBottom: `${colors.red} 2px solid`
    },

    ':focus': {
      outline: 'none'
    }
  },

  suffix: {
    userSelect: 'none',

    fontSize: '14px',
    margin: '10px',

    ':empty': {
      margin: 0
    }
  }
});

export default Input;