import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import { Context } from '../Store';
import ExtendButton from '../Extends/ExtendButton';

export default function TestRender() {
  let [globalState, inSetState] = useContext(Context);
  const { test } = globalState
  console.log('test')
  return (
    <div>
      <ExtendButton />
      TEST {test !== undefined ? test : null}
    </div>
  )
}
