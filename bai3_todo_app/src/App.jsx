import {Component, useState} from 'react'

import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            list: []
        }
    }

    handleChange = (e) => {
        this.setState({item: e.target.value});
    }

    handleAddItem = () => {
        const {item, list} = this.state;
        if (item.trim() !== "") {
            this.setState({
                list: [...list, item],
                item: ""
            });
        }
    };

    render() {
        const {item, list} = this.state;
        return (
            <>
                <h1>To do list</h1>
                <input type="text" value={item} onChange={this.handleChange}/>
                <button onClick={this.handleAddItem}>Add</button>
                {
                    list.map((item, index) => <p key={index}>{item}</p>)
                }
            </>
        )
    }
}

export default App