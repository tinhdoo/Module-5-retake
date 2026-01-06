import {Component} from "react";
import {deleteById} from "../service/vehicleList.js";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class DeleteComponent extends Component{
    constructor(props) {
        super(props);
    }
    handleClose = () => {
        this.props.handleCloseModal();
    }
    handleDelete = () => {
        deleteById(this.props.deleteVehicle.id);
        this.handleClose();
    }
    render() {
        return (
            <>
                <Modal show={this.props.isShowModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Bạn có muốn xóa phương tiện có biển số</span>
                        <span className={'text-danger'}> {this.props.deleteVehicle.num}?</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Hủy
                        </Button>
                        <Button variant="danger" onClick={this.handleDelete}>
                            Xóa
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default DeleteComponent;