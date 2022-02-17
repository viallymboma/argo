import React from 'react'
import { AddOutline, RemoveOutline } from 'react-ionicons'

const Button = (props) => {
  return (
    <button 
      style={{ width: props.width_ }} 
      className="ButtonStyle" 
      onClick={props.showForm} >
        {
            props.action === "add" ? <AddOutline color="white" /> : <RemoveOutline color="white" />
        }
        {/* {
            props.name_
        } */}
        {/* <AddOutline color="white" /> */}
    </button>
  )
}

export default Button


export const UpdateButton = (props) => {

  return (
    <button 
      style={{ width: props.width_ }} 
      className="ButtonStyle" 
      onClick={props.showForm} >
        <RemoveOutline color="white" />
    </button>
  )
}


export const DeleButton = (props) => {

  return (
    <button 
      style={{ width: props.width_ }} 
      className="ButtonStyleRed" 
      onClick={props.showForm} >
        <RemoveOutline color="white" />
    </button>
  )
}