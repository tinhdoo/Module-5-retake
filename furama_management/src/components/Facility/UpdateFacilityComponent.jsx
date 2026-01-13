import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getFacilityById, updateFacility } from "../../service/facilityList";

const UpdateFacilityComponent = () => {
    const navigate = useNavigate();
    const { type, id } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        area: "",
        price: "",
        maxOfPeople: "",
        type: "day",
        image: "",
        standard: "",
        describe: "",
        pool: "",
        floors: "",
        "free-service": ""
    });

    useEffect(() => {
        const loadFacility = async () => {
            try {
                const facility = await getFacilityById(type, id);
                setFormData(facility);
            } catch (error) {
                console.error("Error loading facility:", error);
                alert("Error loading facility details");
            }
        };
        loadFacility();
    }, [type, id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSubmit = {
                ...formData,
                area: Number(formData.area),
                price: Number(formData.price),
                maxOfPeople: Number(formData.maxOfPeople)
            };

            if (type === "villa" || type === "house") {
                formDataToSubmit.floors = Number(formData.floors);
            }

            if (type === "villa") {
                formDataToSubmit.pool = Number(formData.pool);
            }

            await updateFacility(type, id, formDataToSubmit);
            alert("Facility updated successfully!");
            navigate("/facilities");
        } catch (error) {
            console.error("Error updating facility:", error);
            alert("Error updating facility");
        }
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Update Facility</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Diện tích (m²)</Form.Label>
                    <Form.Control
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Giá thuê</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Số lượng người tối đa</Form.Label>
                    <Form.Control
                        type="number"
                        name="maxOfPeople"
                        value={formData.maxOfPeople}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>kiểu thuê</Form.Label>
                    <Form.Select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                    >
                        <option value="day">Day</option>
                        <option value="hour">Hour</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Link ảnh</Form.Label>
                    <Form.Control
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                {(type === "villa" || type === "house") && (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>Room Standard</Form.Label>
                            <Form.Control
                                name="standard"
                                value={formData.standard}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control
                                name="describe"
                                value={formData.describe}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Số tầng</Form.Label>
                            <Form.Control
                                type="number"
                                name="floors"
                                value={formData.floors}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </>
                )}

                {type === "villa" && (
                    <Form.Group className="mb-3">
                        <Form.Label>Kích thước hồ bơi</Form.Label>
                        <Form.Control
                            type="number"
                            name="pool"
                            value={formData.pool}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                )}

                {type === "room" && (
                    <Form.Group className="mb-3">
                        <Form.Label>Dịch vụ miễn phí</Form.Label>
                        <Form.Control
                            name="free-service"
                            value={formData["free-service"]}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                )}

                <div className="text-center">
                    <Button type="submit" variant="primary">
                        Lưu
                    </Button>
                    <Button
                        variant="secondary"
                        className="ms-2"
                        onClick={() => navigate("/facilities")}
                    >
                        Hủy
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default UpdateFacilityComponent;
