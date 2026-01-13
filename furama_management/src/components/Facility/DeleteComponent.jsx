import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteComponent = ({ show, handleClose, handleConfirm, targetName }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton/>
            <Modal.Body>
                Bạn có chắc chắn muốn xóa dịch vụ: <strong>{targetName}</strong>?
                <br />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Hủy
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Xóa
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteComponent;