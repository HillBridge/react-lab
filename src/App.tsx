import React, { useEffect, useState } from 'react'
import logo from './assets/images/logo.svg'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'
import styles from './App.module.css'

interface Props {}
interface State {
  robotList: any[]
  count: number
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [robotList, setRobotList] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
     try {
       const responseData = await fetch(
         'https://jsonplaceholder.typicode.com/users'
       )
       // .then((response) => response.json())
       // .then((res) => setRobotList(res))
       const data = await responseData.json()
       setRobotList(data)
     } catch (error) {
      if(error instanceof Error){
        setError(error.message)
      }
     }
      setLoading(true)
    }

    fetchData()
  }, [])
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>超级无敌可爱机器人商城网站就是要o(╥﹏╥)o</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        add {count}
      </button>
      <ShoppingCart />
      {!error || (error !== '' && <div>错误信息：{error}</div>)}
      {loading ? (
        <div className={styles.robotList}>
          {robotList.map((r) => (
            <Robot id={r.id} key={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      ) : (
        <div>loading ...</div>
      )}
    </div>
  )
}

export default App
