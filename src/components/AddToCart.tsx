import React, { useContext } from 'react'
import { AppSetStateContext } from '../AppState'
import { RobotProps } from './Robot'
// HOC和抽取公共部分逻辑不太一样，提取公共部分逻辑类似于创建组件化代码，可以重复使用，而HOC则更倾向于函数式编程中的函数组合

// 高阶组件
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => { // 这个是函数
   // return class extends React.Component{}
   return (props) => { // 这个是函数组件
     const setAppValue = useContext(AppSetStateContext)
     const addToCart = (id, name) => {
       if (setAppValue) {
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
     return <ChildComponent {...props} addToCart={addToCart} />
   }
 }
// 自定义hooc
export const useAddToCart = () => {
  const setAppValue = useContext(AppSetStateContext)
  const addToCart = (id, name) => {
    if (setAppValue) {
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
  return addToCart
 }