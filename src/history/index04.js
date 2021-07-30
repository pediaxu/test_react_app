/*
 * @Descripttion: 
 * @version: 
 * @Author: Pedia.Xu
 * @Date: 2021-04-29 11:39:35
 * @LastEditors: Pedia.Xu
 * @LastEditTime: 2021-07-29 14:09:57
 */
/**
 * 05-发表评论
 */

//1. 引入核心包
import { Divider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'

// //2. 类组件
// class Child extends React.Component {
//   iptRef = React.createRef()
//   state = {
//     name: 'zs'
//   }

//   render() {
//     return (
//       <div>
//         <input defaultValue={this.state.name} ref={this.iptRef} type="text" />
//         <button onClick={this.fn}>按钮</button>
//       </div>
//     )
//   }

//   fn = () => {
//     console.log(this.iptRef.current.value)
//   }


// }

//2. 类组件  父传子
// class Parent extends React.Component {
//   state = {
//   }

//   render () {
//     return (
//       <div>
//         父组件 <Child fn={() => { }} name={40} obj={{ name: 123 }}></Child>
//       </div>
//     )
//   }

// }

// class Child extends React.Component {
//   state = {
//   }

//   render () {
//     console.log(this.props)
//     console.log(this.props.obj)
//     console.log(this.props.obj.name)
//     return (
//       <div>
//         子组件
//       </div>
//     )
//   }

// }


class Parent extends React.Component {
  state = {
  }

  render () {
    return (
      <div>
        父组件 <Child fn={this.pfn}></Child>
      </div>
    )
  }

  pfn = num => {
    console.log('父被调用了', this, num)
  }

}

class Child extends React.Component {
  state = {
  }

  render () {
    return (
      <div onClick={this.send}>
        子组件
      </div>
    )
  }

  send = () => {
    console.log('开始发送', this.props)
    this.props.fn('123')
  }

}

//3. 渲染
ReactDOM.render(<Parent />, document.getElementById('root'))
