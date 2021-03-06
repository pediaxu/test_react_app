/**
 * 05-发表评论
 */

//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'


import CommentsForm from './components/CommentsForm'
//2. 类组件
class Child extends React.Component {
  state = {
    list: [
      { id: 1, username: '张三', content: '做一个凡人' },
      { id: 2, username: '李四', content: '贪财好色' },
      { id: 3, username: '王五', content: '一身正气' },
    ],
  }
  render () {
    let { username, content } = this.state
    return (
      <div>
        <CommentsForm getData={this.pGetData}></CommentsForm>
        <ul>{this.renderLi()}</ul>
      </div>
    )
  }
  publish = () => {
    let { list, username, content } = this.state
    let obj = {
      id: Date.now(),
      username,
      content
    }
    this.setState({
      list: [obj, ...list],
      username: '',
      content: '',
    })
  }
  handle = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  renderLi () {
    return this.state.list.map(v => {
      return (
        <li key={v.id}>
          <p>评论人：{v.username}</p>
          <p>评论内容：{v.content}</p>
        </li>
      )
    })
  }


}

//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
