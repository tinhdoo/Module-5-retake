import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteFacility, getAllFacilities } from '../../service/facilityList';
import { Button, Container, Row, Col, Pagination } from 'react-bootstrap';
import FacilityCard from './FacilityCard';
import DeleteComponent from "./DeleteComponent.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FacilityListComponent = () => {
    const navigate = useNavigate();
    const [facilities, setFacilities] = useState([]);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("search");

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const [showModal, setShowModal] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const loadData = async () => {
        try {
            const result = await getAllFacilities();
            const listVilla = (result.villa || []).map(item => ({ ...item, facilityType: 'villa' }));
            const listHouse = (result.house || []).map(item => ({ ...item, facilityType: 'house' }));
            const listRoom = (result.room || []).map(item => ({ ...item, facilityType: 'room' }));

            setFacilities([...listVilla, ...listHouse, ...listRoom]);
        } catch (error) {
            console.error("Lỗi tải dữ liệu:", error);
        }
    };

    let filteredFacilities = facilities;
    if (searchTerm) {
        filteredFacilities = facilities.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFacilities = filteredFacilities.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredFacilities.length / itemsPerPage);

    const handleOpenDeleteModal = (item) => {
        setDeleteTarget(item);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        if (deleteTarget) {
            try {
                await deleteFacility(deleteTarget.facilityType, deleteTarget.id);
                await loadData();

                if (currentFacilities.length === 1 && currentPage > 1) {
                    setCurrentPage(prev => prev - 1);
                }

                setShowModal(false);
                toast.success("Xoa thanh cong")
            } catch (error) {
                toast.error("Xoa that bai")
            }
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Danh Sách Dịch Vụ</h2>

            <div className="mb-4 text-end">
                <Button variant="success" onClick={() => navigate('/facility/create')}>
                    + Thêm mới dịch vụ
                </Button>
            </div>

            {searchTerm && (
                <p className="text-muted">
                    Kết quả tìm kiếm cho: <strong>"{searchTerm}"</strong>
                </p>
            )}

            <Row>
                {filteredFacilities.length === 0 ? (
                    <div className="text-center text-danger my-5">
                        <h4>{searchTerm ? "Không tìm thấy kết quả phù hợp" : "Chưa có dữ liệu dịch vụ"}</h4>
                    </div>
                ) : (
                    currentFacilities.map((item) => (
                        <Col md={4} className="mb-4" key={`${item.facilityType}_${item.id}`}>
                            <FacilityCard
                                item={item}
                                onEdit={() => navigate(`/facility/edit/${item.facilityType}/${item.id}`)}
                                onDelete={() => handleOpenDeleteModal(item)}
                            />
                        </Col>
                    ))
                )}
            </Row>

            {filteredFacilities.length > itemsPerPage && (
                <div className="d-flex justify-content-center mt-3">
                    <Pagination>
                        <Pagination.Prev disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Pagination.Item
                                key={i + 1}
                                active={i + 1 === currentPage}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} />
                    </Pagination>
                </div>
            )}

            <DeleteComponent
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleConfirm={confirmDelete}
                targetName={deleteTarget?.name}
            />
        </Container>
    );
};

export default FacilityListComponent;