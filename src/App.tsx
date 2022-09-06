import React from 'react'
import logo from "./assets/images/logo.svg";
import robotData from './mockData/robot.json'
import Robot from './components/Robot'
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <h1>超级无敌可爱机器人商城网站就是要o(╥﹏╥)o</h1>
      </div>
      <div className={styles.robotList}>
        {robotData.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  )
}

export default App
