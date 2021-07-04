import React from 'react';
import Button from '../ui/button';


type buttonTextType = string;
type eTargetType = any | undefined;

export default function ExtendButton() {
  
  const buttonText:buttonTextType = 'imButton';

  const buttonType = 'primary';

  const onChange = ({target}: eTargetType): void => {
    console.log('click')
  }

  

  return (
    <div>
      <Button text={buttonText} type={buttonType}  onChange={onChange} />
    </div>
  )
}
