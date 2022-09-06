import React from "react";
import logo from "./assets/images/logo.svg";
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'
import styles from "./App.module.css";

interface Props {}
interface State {
  robotList: any[],
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robotList: [],
      count: 0,
    }
  }
  // 初始化，dom出现
  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => this.setState({ robotList: res }))
  }
  // 更新
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {}
  // 销毁
  componentWillUnmount(): void {}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>超级无敌可爱机器人商城网站就是要o(╥﹏╥)o</h1>
        </div>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return { count: prevState.count + 1 }
            })

            this.setState((prevState) => {
              return { count: prevState.count + 1 }
            })
          }}
        >
          add {this.state.count}
        </button>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotList.map((r) => (
            <Robot id={r.id} key={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
