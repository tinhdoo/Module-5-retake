import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
    const [listStudent,setListStudent] = useState([
        {id:1, name: "Tịnh", age:23},
        {id:2, name: "Dương", age:20}
    ])
    return (
        <div>
            {listStudent.map(item => <ThongTin key={item.id} name={item.name} age={item.age}/>)}
        </div>
    )
}
function ThongTin(props) {
    return (
        <div style={{ margin: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
            <p>
                Name: <b>{props.name}</b> <br/>
                Age: {props.age}
            </p>
        </div>
    )
}


export default App
