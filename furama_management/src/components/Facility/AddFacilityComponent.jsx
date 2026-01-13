import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addFacility } from "../../service/facilityList";

const AddFacilityComponent = () => {
    const navigate = useNavigate();
    const [facilityType, setFacilityType] = useState("villa");

    const initialFormState = {
        name: "",
        area: "",
        price: "",
        maxOfPeople: "",
        type: "day",
        image: "",
        standard: "",
        description: "",
        pool: "",
        floors: "",
        freeService: ""
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleTypeChange = (e) => {
        setFacilityType(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const commonData = {
                name: formData.name,
                area: Number(formData.area),
                price: Number(formData.price),
                maxOfPeople: Number(formData.maxOfPeople),
                type: formData.type,
                image: formData.image
            };

            let finalData = {};
            switch (facilityType) {
                case "villa":
                    finalData = {
                        ...commonData,
                        standard: formData.standard,
                        description: formData.description,
                        pool: Number(formData.pool),
                        floors: Number(formData.floors)
                    };
                    break;
                case "house":
                    finalData = {
                        ...commonData,
                        standard: formData.standard,
                        description: formData.description,
                        floors: Number(formData.floors)
                    };
                    break;
                case "room":
                    finalData = {
                        ...commonData,
                        freeService: formData.freeService
                    };
                    break;
                default:
                    throw new Error("Invalid facility type");
            }
            await addFacility(facilityType, finalData);
            alert("Facility added successfully!");
            setFormData(initialFormState);
        } catch (error) {
            console.error("Error adding facility:", error);
            alert("Error adding facility. Please check the console.");
        }
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Thêm mới</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Chọn loại dịch vụ</Form.Label>
                    <Form.Select value={facilityType} onChange={handleTypeChange}>
                        <option value="villa">Villa</option>
                        <option value="house">House</option>
                        <option value="room">Room</option>
                    </Form.Select>
                </Form.Group>

                <div className="row">
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Tên</Form.Label>
                        <Form.Control
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Diện tích (m²)</Form.Label>
                        <Form.Control
                            type="number"
                            name="area"
                            value={formData.area}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                </div>

                <div className="row">
                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Giá thuê</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-md-6">
                        <Form.Label>Số lượng người tối đa</Form.Label>
                        <Form.Control
                            type="number"
                            name="maxOfPeople"
                            value={formData.maxOfPeople}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Kiểu thuê</Form.Label>
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
                    <Form.Label>Ảnh</Form.Label>
                    <Form.Control
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                {(facilityType === "villa" || facilityType === "house") && (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>Standard</Form.Label>
                            <Form.Control
                                name="standard"
                                value={formData.standard}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formData.description}
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

                {facilityType === "villa" && (
                    <Form.Group className="mb-3">
                        <Form.Label>Diện tích hồ bơi (m²)</Form.Label>
                        <Form.Control
                            type="number"
                            name="pool"
                            value={formData.pool}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                )}

                {facilityType === "room" && (
                    <Form.Group className="mb-3">
                        <Form.Label>Dịch vụ miễn phí</Form.Label>
                        <Form.Control
                            name="freeService"
                            value={formData.freeService}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                )}

                <div className="text-center mt-4">
                    <Button type="submit" variant="success" size="lg">
                        Lưu
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default AddFacilityComponent;