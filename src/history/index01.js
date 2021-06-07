
import React from 'react'
import ReactDOM from 'react-dom'

// {const h1 = React.createElement(
// 	'h1',
// 	null,
// 	'Hello React CLI'
// )
// const h1 = <h1 className="cls">Hello JSX!</h1>

// ReactDOM.render(h1, document.getElementById('root'))}


//函数组件 传值-props
// function Hello(props) {
//     // console.log(props)
//     const {name, age} =props
//     return <div>Say Hello!-姓名{name}-年纪{age}</div>
// }


// 箭头函数改造
// const Hello = ({name, age}) => (
//     // console.log(props);
//     // const {name, age} = props;
//     <div>{name}:say hello</div>
//     )
    
//     ReactDOM.render(<Hello name='zs' age={30}/>, document.getElementById('root'))


// 类组件
// class Hello extends React.Component {
//     constructor (props) {
//         super()
//         const { name, age} = props
//         console.log(props,name,age)
//     }
//     render () {
//         // console.log(this.props)
//         // const {name, age} = this.props
//         return null
//         // (
//         // <div>{name}-Say Hello!-年纪-{age}</div>
//         // )
//     }
// }

// class Person {
//     constructor() {
//         this.maxAge = 120
//     }
// }

// let p = new Person()
// console.log(p)

// class Chinese extends React.Component {
//     constructor() {
//         super()
//         this.name = 'zs'
//         // this.state = {
//         //     age: 30
//         // }
//     }
//     state = {
//         sex: '男'
//     }
//     render () {
//         return (
//         <div>
//           <div>性别：{this.state.sex}</div>
//           {/* <div>年纪：{this.state.age}</div> */}
//         </div>
//         )
//     }
// }

// let c = new Chinese()
// console.log(c)

// class Chinese extends React.Component {
//     state = {
//         sex: '男',
//         name: 'zs'
//     }
//     // 钩子 render 渲染
//     render () {
//         return (
//         <div>
//           <div>姓名：{this.state.name}</div>
//           <div>性别：{this.state.sex}</div>
//           {/* <div>年纪：{this.state.age}</div> */}
//         </div>
//         )
//     }
//     // 钩子 渲染完成
//     componentDidMount() {
//         console.log(this.state.name)
        
//         this.setState({
//             name: 'ls',
//         })
//     }
// }
// 
// class Chinese extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             num: 1
//         }
//     }
//     render () {
//         return (
//         <div>
//           <button onClick={this.fn}>按钮</button>
//         </div>
//         )
//     }
//     fn() {
//         console.log('按钮被点击了~~~~~~')
//     }
// 
// }
// 
// class Chinese extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.fn = this.fn.bind(this)
//     // }
//     state = {
//         name: '飞哥',
//     }
//     render () {
//         return (
//         <div>
//           <button onClick={this.fn1.bind(this)}>按钮{this.state.name}</button>
//           <button onClick={this.fn2}>{this.state.name}</button>
//           <button onClick={() => this.fn3()}>{this.state.name}</button>
//           <div></div>
//         </div>
//         )
//     }
//     fn3() {
//         console.log(this)
//     }
//     fn2 = () => {
//         console.log(this)
//     }
//     fn1() {
//         console.log(this)
//         this.setState({
//             name: '马哥'
//         })
//     }
// 
// }
// 
// class Chinese extends React.Component {
//     state = {
//         name: '飞哥'
//     }
//     render() {
//         console.log(this)
//         return <button onClick={this.fn.bind(this)}>{this.state.name}</button>
//     }
//     fn() {
//         console.log(this)
//         this.setState({
//             name: '马哥'
//         })
//     }
// }
// class Chinese extends React.Component{
//     render() {
//         return <div>
//             {/* <button onClick={this.fn1.bind(this, 123,456,)}>按钮</button> */}
//             {/* <button onClick={this.fn2}>按钮</button> */}
//             <button onClick={() => this.fn3(666)}>按钮</button>
//             </div>
//     }
//     fn1(n1, n2,n3) {
//         console.log(n1, n2, n3)
//     }
//     fn2 = (n) => {
//         console.log(n)
//     }
//     fn3 = (n) => {
//         console.log(n)
//     }
// }

class Chinese extends React.Component{
    state = {
        name: '张三'
    }
    render() {
        console.log(this)
        return <div onClick={() => this.updateName('马哥')}>
            {this.state.name}
        </div>
    }
    updateName = (n) => {
        console.log(this)
        this.setState({
            name:n
        })
    }
}

ReactDOM.render(<Chinese name='zs' age={30}/>, document.getElementById('root'))