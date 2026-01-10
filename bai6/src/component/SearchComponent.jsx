import {useState} from "react";

const SearchComponent = (props) => { // 1. Nhận props
    const [searchNum, setSearchNum] = useState("");

    const handleSearch = () => {
        props.onSearch(searchNum);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchNum(value);
        if (value === "") {
            props.onSearch("");
        }
    }

    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Nhập biển số xe..."
                value={searchNum}
                onChange={handleChange}
                style={{ padding: '5px', marginRight: '10px' }}
            />

            <button onClick={handleSearch} style={{ padding: '5px 10px' }}>
                Tìm kiếm
            </button>
        </div>
    )
}
export default SearchComponent;