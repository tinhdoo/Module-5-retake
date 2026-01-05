import './App.css'
import {phoneList} from "./service/phoneList.js";
import React from "react";

function App() {
  const headTitle = React.createElement('h1', null, 'Danh sách điện thoại');
  const idTitle = React.createElement('th', null, 'STT');
  const nameTitle = React.createElement('th', null, 'Tên sản phẩm');
  const priceTitle = React.createElement('th', null, 'Giá');

  return (
    <>
      {headTitle},
      <table>
        <thead>
          <tr>
            {idTitle}
            {nameTitle}
            {priceTitle}
          </tr>
        </thead>
        <tbody>
        {
          phoneList.map(item =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>)
        }
        </tbody>
      </table>
    </>
  )
}

export default App
