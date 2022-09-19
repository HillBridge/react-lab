import React, { useContext  } from 'react'
import styles from './Robot.module.css'
import { AppContext } from '../AppState'
import { useAddToCart } from './AddToCart'
export interface RobotProps {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const appValue = useContext(AppContext)
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="logo" />
      <p>打折商品</p>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{appValue.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default Robot
