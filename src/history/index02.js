
import React from 'react'
import reactDom from 'react-dom'
import ReactDOM from 'react-dom'
import './index.css'


// class Child extends React.Component{
//     state = {
//         isLoading: true,
//     }
//     render() {
//         // if(this.state.isLoading) {
//         //     return <div>
//         //         正在加载中....
//         //     </div>
//         // } else {
//         //     return <div>已经加载完成~~~~~</div>
//         // }
//         // return this.state.isLoading ? (<div>正在加载中....</div>) : (<div>已经加载完成~~~~~</div>)
//         return !this.state.isLoading && <div>正在加载中....</div>
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false,
//             })
//         },3000)
//     }
// }
// class Child extends React.Component {
//     state = {
//         list1: ['zs', 'ls', 'ww'],
//         list2: [
//           { id: 1, name: '张三' },
//           { id: 2, name: '李四' },
//           { id: 3, name: '王五' },
//         ],
//     }
//     render() {
//         return (
//             <ul>
//                 {this.renderLi1()}
//                 {this.renderLi2()}
//             </ul>
//         )
//     }
//     renderLi1() {
//         return this.state.list1.map((v,i) => {
//             return <li key={i}>{v}</li>
//         })
//     }
//     renderLi2() {
//         return this.state.list2.map((v,i) => {
//             return <li key={v.id}>{v.name}</li>
//         })
//     }
// }

// class Child extends React.Component {
//     state = {}
//     render() {
//         return (
//             <div
//               className='fz'
//               style={{color: 'red', background: 'pink', height: 150}}
//             >
//                 哈哈
//             </div>
//         )
//     }
// }
// 
// class Child extends React.Component {
//     state= {
//         list: [
//             { id: 1, username: '张三', content: '做一个凡人' },
//             { id: 2, username: '李四', content: '贪财好色' },
//             { id: 3, username: '王五', content: '一身正气' },
//           ], 
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     评论的人 : <input type='text' style={{ width:210}}></input> <br/>
//                     评论内容 : <textarea cols='30' rows='10'></textarea>
//                     <button>发表</button>
//                 </div>
//                 <ul>{this.renderLi()}</ul>
//             </div>
//         )
//     }
//     renderLi() {
//         return this.state.list.map(v => {
//             return (
//                 <li key={v.id}>
//                     <p>评论的人 ： {v.username}</p>
//                     <p>评论内容 ： {v.content}</p>
//                 </li>
//             )
//         })
//     }
// }

// class Child extends React.Component {
//     state = {
//         username: '张三'
//     }
//     render() {
//         let { username } = this.state
//         return (
//             <div>
//                 <input type='text' value={username} onChange={this.handleInput}></input>
//             </div>
//         )
//     }
//     handleInput = e => {
//         console.log(e.target.value)
//         this.setState({
//             username: e.target.value
//         })
//     }
// }

class Child extends React.Component {
    state = {
        username: '张三',
        content: '',
        city: 'hz',
    }
    render() {
        let { username, content, city } = this.state
        return (
            <div>
                <input type='text' value={username} onChange={this.handleInput}></input>
                <br />
                <textarea
                value={content}
                onChange={this.handleTextarea}
                cols='30'
                rows='10'
                ></textarea>
                <br />
                <select value={city} onChange={this.handleSelect}>
                    <option value='sh'>上海</option>
                    <option value='bj'>北京</option>
                    <option value='hz'>杭州</option>
                </select>
            </div>
        )
    }
    handleInput = e => {
        console.log(e.target.value)
        this.setState({
            username: e.target.value
        })
    }
    handleTextarea = e => {
        console.log(e.target.value)
        this.setState({
            content: e.target.value
        })
    }
    handleSelect = e => {
        console.log(e.target.value)
        this.setState({
            city: e.target.value
        })
    }
}

ReactDOM.render(<Child name='zs' age={30}/>, document.getElementById('root'))