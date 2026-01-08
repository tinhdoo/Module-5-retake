import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findById} from "../service/vehicleList.js";

const DetailComponent = () => {
    const [detailVehicle, setDetailVehicle] = useState({
        id: "",
        num: "",
        owner: "",
        date: ""
    });

    const {id} = useParams();

    useEffect(() => {
        const vehicle = findById(Number(id));
        if (vehicle) {
            setDetailVehicle(vehicle);
        }
    }, [id]);

    return (
        <>
            <h1>Detail</h1>
            <table>
                <tbody>
                <tr>
                    <td>ID:  {detailVehicle.id}</td>
                </tr>

                <tr>
                    <td>Biển số:  {detailVehicle.num}</td>
                </tr>

                <tr>
                    <td>Chủ sở hữu:  {detailVehicle.owner}</td>
                </tr>

                <tr>
                    <td>Ngày sản xuất:  {detailVehicle.date}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

export default DetailComponent;