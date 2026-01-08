import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {addVehicle} from "../service/vehicleList.js";
import {useNavigate} from "react-router-dom";

const AddVehicleComponent = (props) => {
    const nativgate = useNavigate();

    const formik = useFormik({
        initialValues: {
            num: "",
            owner: "",
            date: ""
        },
        validationSchema: Yup.object({
            num: Yup.string().required("Biển số xe không được để trống!"),
            owner: Yup.string().required("Chủ sở hữu không được để trống!"),
            date: Yup.string().required("Ngày sx không được để trống!"),
        }),
        onSubmit: (values) => {
            addVehicle(values);
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
                        <input type="text" name="num" value={formik.values.num} onChange={formik.handleChange}
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
                </tbody>

            </table>
            <button onClick={formik.handleSubmit}>Thêm mới</button>

        </>
    )
}
export default AddVehicleComponent;