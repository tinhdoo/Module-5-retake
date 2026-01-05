import {vehicleList} from "./service/vehicleList.js";

function Vehicle() {
    const listVehicle = vehicleList;

    return (
        <>
            {
                <h1>DS phương tiện giao thông</h1>}
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Biển kiểm soát
                    </th>
                    <th>
                        Chủ sở hữu
                    </th>
                    <th>
                        Ngày sản xuất
                    </th>
                </tr>

                {
                    listVehicle.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.num}</td>
                            <td>{item.owner}</td>
                            <td>{item.date}</td>
                        </tr>)
                }
            </table>
        </>
    )
}

export default Vehicle;