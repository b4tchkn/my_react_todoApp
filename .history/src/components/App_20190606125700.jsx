import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import DoneList from "./DoneList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      done: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handledoneAdd = this.handledoneAdd.bind(this)
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
  // DONEデータ保存
  handledoneAdd(i) {
    // フォームから受け取ったデータをオブジェクトに挿入してstateのtodo配列に追加
    this.state.done.push({ 'a', }); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({ done: this.state.done }); // 保存完了
  }

  // データ削除
  handleRemove(i) {
    // todo配列のi番目から1つ目のデータを除外
    this.state.todo.splice(i, 1);
    this.setState({ todo: this.state.todo });
  }

  //ここで全てをreturn
  render() {
    return (
      <div className="siimple-grid">
        <div className="siimple-box siimple--bg-primary">
          <h1 className="siimple-box-title siimple--color-white">Todo App</h1>
          <Form handleAdd={this.handleAdd} />
          <div className="siimple-rule"></div>
          <div className="siimple-grid-row">
            <div className="siimple-grid-col siimple-grid-col--3">
              <h2 className="siimple-box-title siimple--color-light">Todo</h2>
              <List todos={this.state.todo} handledoneAdd={this.handledoneAdd} />
            </div>
            <div className="siimple-grid-col siimple-grid-col--3">
              <h2 className="siimple-box-title siimple--color-light">Done</h2>
              <DoneList dones={this.state.done} handledoneAdd={this.handledoneAdd} />
            </div>
          </div>
        </div >
      </div >
    );
  }
}
