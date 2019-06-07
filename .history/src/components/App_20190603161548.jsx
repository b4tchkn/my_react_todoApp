import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import IMAGE from '../test.jpg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // データ保存
  handleAdd(e) {
    console.log(e.target.title.value);
    // リダイレクト防止
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入してstateのtodo配列に追加
    this.state.todo.push({ title: e.target.title.value }); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({ todo: this.state.todo }); // 保存完了
    // inputのvalueを空に
    e.target.title.value = '';
  }

  // データ削除
  handleRemove(i) {
    // todo配列のi番目から1つ目のデータを除外
    this.state.todo.splice(i, 1);
    this.setState({ todo: this.state.todo });
  }

  //ここで全てをreturn
  render() {
    // image setting
    const imgUrl = '../test.jpg'
    const style = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${IMAGE})`,
    }
    return (
      <div>
        <h1>aaa</h1>
        <img style={style} />
        <div className="siimple-box siimple--bg-dark">
          <h1 className="siimple-box-title siimple--color-white">Todo App</h1>
          <Form handleAdd={this.handleAdd} />
          <div className="siimple-rule"></div>
          <List todos={this.state.todo} handleRemove={this.handleRemove} />
          <img style={style} />
        </div >
      </div>
    );
  }
}
