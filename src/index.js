/**
 * 05-发表评论
 */

//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'

//2. 类组件
class Child extends React.Component {
  state = {
    list: [
      { id: 1, username: '张三', content: '做一个凡人' },
      { id: 2, username: '李四', content: '贪财好色' },
      { id: 3, username: '王五', content: '一身正气' },
    ],
    username: '',
    content: '',
  }
  render() {
    let { username, content } = this.state
    return (
        <div>
           <div>
             评论的人：{' '}
             <input
             name='username'
             value={username}
             onChange={this.handle}
             ></input>
           </div> 
        </div>
    )
  }
  handle = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


}

//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
