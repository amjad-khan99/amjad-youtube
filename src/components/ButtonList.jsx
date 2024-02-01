import React from 'react'
import Button from './Button';

export const ButtonList = () => {
  return (
    <div className='flex p-3 flex-auto space-x-6 my-4 '>
      <Button name={"All"}/>
      <Button name={"mixes"}/>
      <Button name={"computer science"}/>
      <Button name={"news"}/>
      <Button name={"podcast"}/>
      <Button name={"game"}/>
      <Button name={"pop"}/>
      <Button name={"physics"}/>
      <Button name={"olympics"}/>
      <Button name={"movies"}/>
      
    </div>
  )
}
export default ButtonList;