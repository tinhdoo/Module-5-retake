import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FacilityCard = ({item, onEdit, onDelete}) => {

    const renderInfo = () => {
        if (item.facilityType === 'villa') {
            return (
                <div className="mt-2 text-muted small">
                    <p className="mb-1">Hồ bơi: {item.pool} m²</p>
                    <p className="mb-1">Số tầng: {item.floors}</p>
                    <p className="mb-1">Tiêu chuẩn: {item.standard}</p>
                </div>
            );
        }
        if (item.facilityType === 'house') {
            return (
                <div className="mt-2 text-muted small">
                    <p className="mb-1">Số tầng: {item.floors}</p>
                    <p className="mb-1">Tiêu chuẩn: {item.standard}</p>
                </div>
            );
        }
        if (item.facilityType === 'room') {
            return (
                <div className="mt-2 text-muted small">
                    <p className="mb-1">Miễn phí: {item['free-service']}</p>
                </div>
            );
        }
    };

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={item.image}
                style={{height: '200px', objectFit: 'cover'}}
            />

            <Card.Body>
                <Card.Title className="text-primary">{item.name}</Card.Title>

                <Card.Text as="div">
                    <div><strong>Diện tích:</strong> {item.area} m²</div>
                    <div><strong>Giá:</strong> {item.price?.toLocaleString()} VND</div>

                        {item.facilityType.toUpperCase()}
                    <hr/>

                    {renderInfo()}
                </Card.Text>
            </Card.Body>

            <Card.Footer className="bg-white border-top-0 d-flex justify-content-between pb-3">
                <Button variant="warning" size="sm" onClick={onEdit}>
                    Sửa
                </Button>
                <Button variant="danger" size="sm" onClick={onDelete}>
                    Xóa
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default FacilityCard;