import React from 'react'

export const ButtonUI = ({styleButton,textButton, event}) => {
  return (
    <button onClick={event} className={styleButton}>{textButton}</button>
  )
}
