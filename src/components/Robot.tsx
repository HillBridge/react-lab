import React, { useContext  } from 'react'
import styles from './Robot.module.css'
import { TextContext } from '../index'


interface root {
  id: number
  name: string
  email: string
}

const Robot: React.FC<root> = ({ id, name, email }) => {
  const textCtxValue = useContext(TextContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="logo" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{textCtxValue.username}</p>
    </div>
  )
}

export default Robot
