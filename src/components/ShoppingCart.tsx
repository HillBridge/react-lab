import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import styles from './ShoppingCart.module.css'

interface Props {}
interface State {
  isOpened: Boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpened: false,
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // e.target  => 描述的是事件发生的元素
    // e.currentTarget => 描述的是事件处理绑定的元素
    console.log((e.target as HTMLElement).nodeName)
    
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({
        isOpened: !this.state.isOpened,
      })
    }
  }
  render() {
    return (
      <div className={styles.cardContainer}>
        <button onClick={(e) => this.handleClick(e)}>
          <FiShoppingBag />
          <span>购物车 2（件）</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpened ? 'block' : 'none' }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart