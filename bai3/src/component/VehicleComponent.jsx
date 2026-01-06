import {Component} from "react";
import {getAll, vehicleList} from "../service/vehicleList";
import DeleteComponent from "./DeleteComponent.jsx";

class VehicleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleList: [],
            isShowModal: false,
            deleteVehicle: {
                id: "",
                num: "",
                owner: "",
                date: ""
            }
        }
    }

    componentDidMount() {
        this.setState({vehicleList: [...vehicleList]});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isShowModal != this.state.isShowModal) {
            this.setState({
                vehicleList: [...getAll()]
            })
        }
    }

    handleShowModal = (vehicle) => {
        this.setState({isShowModal: true,
        deleteVehicle: vehicle});
    }
    handleCloseModal = () => {
        this.setState({isShowModal: false});
    }

    render() {
        return (
            <>
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
                        this.state.vehicleList.map((item, index) => <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.num}</td>
                            <td>{item.owner}</td>
                            <td>{item.date}</td>
                            <td>
                                <button onClick={() => this.handleShowModal(item)}>Xóa</button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
                <DeleteComponent isShowModal={this.state.isShowModal}
                                 deleteVehicle={this.state.deleteVehicle}
                                 handleCloseModal={this.handleCloseModal}/>
            </>
        )

    }
}

export default VehicleComponent;