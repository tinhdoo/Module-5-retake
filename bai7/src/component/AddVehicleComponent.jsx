import {useFormik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {addVehicle} from "../service/vehicleList.js";
import axios from "axios";
import {useEffect, useState} from "react";

const AddVehicleComponent = (props) => {
    const nativgate = useNavigate();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get("http://localhost:8080/types");
                setTypes(response.data);
            } catch (error) {
                console.error("Lỗi:", error);
            }
        };
        fetchTypes();
    }, []);

    const formik = useFormik({
        initialValues: {
            num: "",
            owner: "",
            date: "",
            type: {name: ""}
        },
        validationSchema: Yup.object({
            num: Yup.number().required("Biển số xe không được để trống!"),
            owner: Yup.string().required("Chủ sở hữu không được để trống!"),
            date: Yup.string().required("Ngày sx không được để trống!"),
        }),
        onSubmit: async (values) => {
            values.type = JSON.parse(values.type);
            await addVehicle(values);
            if (props.onNewVehicleAdded) {
                props.onNewVehicleAdded();
            }
            formik.resetForm();
            nativgate('/vehicle-list');
        }
    })

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
                        <input type="number" name="num" value={formik.values.num} onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.num && formik.errors.num ? (
                            <div style={{ color: 'red' }}>{formik.errors.num}</div>
                        ) : null}
                    </td>
                </tr>
                <tr>
                    <th>
                        Chủ sở hữu:
                    </th>
                    <td>
                        <input type="text" name="owner" value={formik.values.owner} onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.owner && formik.errors.owner ? (
                            <div style={{ color: 'red' }}>{formik.errors.owner}</div>
                        ) : null}
                    </td>
                </tr>
                <tr>
                    <th>
                        Ngày sản xuất:
                    </th>
                    <td>
                        <input type="text" name="date" value={formik.values.date} onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                        {formik.touched.date && formik.errors.date ? (
                            <div style={{ color: 'red' }}>{formik.errors.date}</div>
                        ) : null}
                    </td>
                </tr>
                <tr>
                    <th>
                        Loại xe:
                    </th>
                    <td>
                        <select name="type" value={formik.values.type} onChange={formik.handleChange}>
                            <option value="">----------chọn----------</option>
                            {types.map(type => (
                                <option key={type.id} value={JSON.stringify(type)}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>
                </tbody>

            </table>
            <button type={"button"} onClick={formik.handleSubmit}>Thêm mới</button>

        </>
    )
}
export default AddVehicleComponent;