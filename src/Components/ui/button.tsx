import React, {ButtonHTMLAttributes} from 'react'
import { Button } from 'antd';


type ButtonTypes = 'text' | 'link' | 'primary';
type typeTarget = any

interface IButtonProps {
  /** Текст внутри кнопки */
  text: string,
  /** Тип кнопки, извлеченный из перечисления ButtonTypes */
  type: ButtonTypes,
  /** Функция, выполняемая после нажатия кнопки */
  onChange: ( {target} : typeTarget) => void
}


const ComponentButton: React.FC<IButtonProps> = ({text, type, onChange}) => {
  console.log({text, type, onChange})
  return (
    <div>
      <Button type={type} onClick={onChange}>{text}</Button>
    </div>
  )
}

export default ComponentButton;
