import React from 'react'
import styles from './Robot.module.css'


interface root {
  id: number
  name: string
  email: string
}

const Robot: React.FC<root> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="logo" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robot
