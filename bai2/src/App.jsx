import './App.css'
import {phoneList} from "./service/phoneList.js";
import React from "react";

function App() {
  const headTitle = React.createElement('h1', null, 'Danh sách điện thoại');
  const idTitle = React.createElement('th', null, 'STT');
  const nameTitle = React.createElement('th', null, 'Tên sản phẩm');
  const priceTitle = React.createElement('th', null, 'Giá');
  const listPhone = React.createElement('table', null, React.createElement('tr', null, idTitle, nameTitle, priceTitle)
  ,React.createElement('tbody',null,phoneList.map(item => React.createElement('tr',null,React.createElement('td',null,item.id),
          React.createElement('td',null,item.name),React.createElement('td',null,item.price)))));
  return (
    <>
      {headTitle}
      {listPhone}
    </>
  )
}

export default App
