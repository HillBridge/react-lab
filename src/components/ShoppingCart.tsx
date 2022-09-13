import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import styles from './ShoppingCart.module.css'
import { AppContext } from '../AppState'

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
    
    return <AppContext.Consumer>
      {
        (value) => {
          return (
            <div className={styles.cardContainer}>
              <button onClick={(e) => this.handleClick(e)}>
                <FiShoppingBag />
                <span>购物车 {value.shoppingCart.items.length}（件）</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{ display: this.state.isOpened ? 'block' : 'none' }}
              >
                <ul>
                  {
                    value.shoppingCart.items.map( val => {
                      return <li>{val.name}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          )
        }
      }
    </AppContext.Consumer>
    
  }
}

export default ShoppingCart