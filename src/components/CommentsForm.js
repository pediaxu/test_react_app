/*
 * @Descripttion:
 * @version:
 * @Author: Pedia.Xu
 * @Date: 2021-07-29 14:26:23
 * @LastEditors: Pedia.Xu
 * @LastEditTime: 2021-07-29 16:36:24
 */
import React from 'react'


class CommentsForm extends React.Component {
  state = {
    username: '',
    content: '',
  }
  render () {
    let { username, content } = this.state
    return (
      <div>
        评论的人 ：{' '}
        <input
          name="username"
          value={username}
          onChange={this.handle}
          type="text" />{' '}
        <br />
        评论内容 :{' '}
        <textarea
          name="content"
          value={content}
          onChange={this.handle}
          id=""
          cols="30"
          rows="10"
        ></textarea>{' '}
        <button onClick={this.publish}>发表</button>
      </div>
    )
  }

  handle = e => {
    console.log(e)
  }
}