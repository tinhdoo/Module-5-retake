import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'; // 1. Sửa import đúng
import { deleteFacility, getAllFacilities } from '../../service/facilityList';
import { Button, Container, Row, Col, Pagination } from 'react-bootstrap';
import FacilityCard from './FacilityCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const FacilityListComponent = () => {
    const navigate = useNavigate();
    const [facilities, setFacilities] = useState([]);

    // Lấy keyword từ URL
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("search");

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

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
            console.error(error);
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


    const handleDelete = async (type, id) => {
        if (window.confirm("Bạn có chắc muốn xóa không?")) {
            try {
                await deleteFacility(type, id);
                await loadData();
                if (currentFacilities.length === 1 && currentPage > 1) {
                    setCurrentPage(prev => prev - 1);
                }
                alert("Xóa thành công");
            } catch (error) {
                alert("Xóa thất bại");
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
                    Thêm mới
                </Button>
            </div>

            {searchTerm && (
                <p className="text-muted">
                    Kết quả tìm kiếm cho: <strong>"{searchTerm}"</strong>
                </p>
            )}

            <Row>
                {filteredFacilities.length === 0 && (
                    <div className="text-center text-danger">
                        {searchTerm ? "Không tìm thấy kết quả phù hợp" : "Chưa có dữ liệu"}
                    </div>
                )}

                {currentFacilities.map((item) => (
                    <Col md={4} className="mb-4" key={`${item.facilityType}_${item.id}`}>
                        <FacilityCard
                            item={item}
                            onEdit={() => navigate(`/facility/edit/${item.facilityType}/${item.id}`)}
                            onDelete={() => handleDelete(item.facilityType, item.id)}
                        />
                    </Col>
                ))}
            </Row>

            {filteredFacilities.length > itemsPerPage && (
                <div className="d-flex justify-content-center mt-3">
                    <Pagination>
                        <Pagination.First
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                        />
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        />

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <Pagination.Item
                                key={number}
                                active={number === currentPage}
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </Pagination.Item>
                        ))}

                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                        <Pagination.Last
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                        />
                    </Pagination>
                </div>
            )}
        </Container>
    );
};

export default FacilityListComponent;