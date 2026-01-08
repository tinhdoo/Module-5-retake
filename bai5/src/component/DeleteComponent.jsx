import {Button, Modal} from "react-bootstrap";
import {deleteById} from "../service/vehicleList.js";

const DeleteComponent = (props) => {
    const handleClose = () => {
        props.handleCloseModal();
    }

    const handleDelete = () => {
        deleteById(props.deleteVehicle.id);
        handleClose();
    }

    return (
        <>
            <Modal show={props.isShowModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xóa phương tiện có biển số</span>
                    <span className={'text-danger'}> {props.deleteVehicle.num}?</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteComponent;