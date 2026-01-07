import {useEffect, useState} from "react";
import DeleteComponent from "./DeleteComponent.jsx";
import {getAll} from "../service/vehicleList.js";
import AddVehicleComponent from "./AddVehicleComponent.jsx";
import SearchComponent from "./SearchComponent.jsx";

const ListComponent = () => {
    const [list, setList] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [keyword, setKeyword] = useState("");

    const [deleteVehicle, setDeleteVehicle] = useState({
        id: "",
        num: "",
        owner: "",
        date: ""
    });

    useEffect(() => {
        setList([...getAll()]);
    }, [isShowModal, refreshTrigger]);

    const handleUpdateList = () => {
        setRefreshTrigger(prev => prev + 1);
    }

    const handleCloseModal = () => {
        setIsShowModal(false);
    }

    const handleShowModal = (vehicle) => {
        setIsShowModal(true);
        setDeleteVehicle(vehicle);
    }
    const handleReceiveSearch = (term) => {
        setKeyword(term); // Fix: setKeyWord -> setKeyword
    }

    return (
        <div>
            <h2>Danh sách phương tiện</h2>
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
                        .map((item, index) => <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.num}</td>
                            <td>{item.owner}</td>
                            <td>{item.date}</td>
                            <td>
                                <button onClick={() => handleShowModal(item)}>Xóa</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>

            <DeleteComponent isShowModal={isShowModal}
                             deleteVehicle={deleteVehicle}
                             handleCloseModal={handleCloseModal}
            />
            <AddVehicleComponent onNewVehicleAdded={handleUpdateList}/>
            <SearchComponent onSearch={handleReceiveSearch}/>

        </div>
    )
}

export default ListComponent;