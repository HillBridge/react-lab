import React, { useContext  } from 'react'
import styles from './Robot.module.css'
import { AppContext, AppSetStateContext } from '../AppState'


interface root {
  id: number
  name: string
  email: string
}

const Robot: React.FC<root> = ({ id, name, email }) => {
  const appValue = useContext(AppContext)
  const setAppValue = useContext(AppSetStateContext)
  const addToCart = () => {
    if(setAppValue){
      setAppValue((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        }
      })
    }
  }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="logo" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{appValue.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  )
}

export default Robot
