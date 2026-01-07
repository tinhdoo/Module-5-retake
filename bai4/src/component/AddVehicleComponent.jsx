import {useState} from "react";
import {addVehicle} from "../service/vehicleList.js";

const AddVehicleComponent = (props) => {

    const [vehicle, setVehicle] = useState({
        num: "",
        owner: "",
        date: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setVehicle({
            ...vehicle,
            [name]: value
        });
    }

    const handleAddVehicle = () => {
        addVehicle(vehicle);
        setVehicle({num: "", owner: "", date: ""});
        if (props.onNewVehicleAdded){
            props.onNewVehicleAdded();
        }
    }

    return (
        <>
            <h2> Thêm phương tiện mới</h2>
            <table>
                <tbody>
                <tr>
                    <th>
                        Biển số xe:
                    </th>
                    <td>
                        <input type="text" name="num" value={vehicle.num} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <th>
                        Chủ sở hữu:
                    </th>
                    <td>
                        <input type="text" name="owner" value={vehicle.owner} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <th>
                        Ngày sản xuất:
                    </th>
                    <td>
                        <input type="text" name="date" value={vehicle.date} onChange={handleChange}/>
                    </td>
                </tr>
                </tbody>

            </table>
            <button onClick={handleAddVehicle}>Thêm mới</button>

        </>
    )
}
export default AddVehicleComponent;