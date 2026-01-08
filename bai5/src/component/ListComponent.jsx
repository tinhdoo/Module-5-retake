import {useEffect, useState} from "react";
import DeleteComponent from "./DeleteComponent.jsx";
import {getAll} from "../service/vehicleList.js";
import SearchComponent from "./SearchComponent.jsx";
import {Link} from "react-router-dom";

const ListComponent = () => {
    const [list, setList] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [isReloading, setIsReloading] = useState(false);

    const [deleteVehicle, setDeleteVehicle] = useState({
        id: "",
        num: "",
        owner: "",
        date: ""
    });

    useEffect(() => {
        setList([...getAll()]);
    }, [isReloading,isShowModal]);

    const handleCloseModal = () => {
        setIsShowModal(false);
    }

    const handleShowModal = (vehicle) => {
        setIsShowModal(true);
        setDeleteVehicle(vehicle);
    }
    const handleReceiveSearch = (term) => {
        setKeyword(term);
    }

    return (
        <div>
            <h2>Danh sách phương tiện</h2>
            <SearchComponent onSearch={handleReceiveSearch}/>
            <Link to={"/add-vehicle"} >Thêm mới</Link>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Biển số xe</th>
                    <th>Chủ sở hữu</th>
                    <th>Ngày sản xuất</th>
                </tr>
                </thead>
                <tbody>{
                    list && list
                        .filter(item => {
                            if (!keyword) return true;
                            return String(item.num).toLowerCase().includes(keyword.toLowerCase());
                        })
                        .map((item) => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.num}</td>
                            <td>{item.owner}</td>
                            <td>{item.date}</td>
                            <td>
                                <button onClick={() => handleShowModal(item)}>Xóa</button>
                            </td>
                            <td>
                                <Link to={`/detail/${item.id}`}>Chi tiết</Link>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>

            <DeleteComponent isShowModal={isShowModal}
                             deleteVehicle={deleteVehicle}
                             handleCloseModal={handleCloseModal}
            />

        </div>
    )
}

export default ListComponent;