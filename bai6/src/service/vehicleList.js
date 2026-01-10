import axios from "axios";

const URL_BE = "http://localhost:8080";

export async function getAll() {
    try {
        const response = await axios.get(`${URL_BE}/vehicles`);
        return response.data;
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        alert("Có lỗi xảy ra khi tải dữ liệu!");
        return [];
    }
}

export async function deleteById(id) {
    try {
        await axios.delete(`${URL_BE}/vehicles/${id}`);
        return true;
    } catch (error) {
        console.error("Error deleting vehicle:", error);
        alert("Có lỗi xảy ra khi xóa!");
        return false;
    }
}

// File: service/vehicleList.js

export async function addVehicle(vehicle) {
    try {
        const vehicleList = await getAll();
        const maxId = vehicleList.length > 0
            ? Math.max(...vehicleList.map(item => Number(item.id))) : 0;
        vehicle.id = Number(maxId + 1);
        const response = await axios.post(`${URL_BE}/vehicles`, vehicle);
        return response.data;
    } catch (error) {
        console.error("Error adding vehicle:", error);
        alert("Có lỗi xảy ra khi thêm mới!");
        throw error;
    }
}

export async function searchVehicle(keyword) {
    try {
        const response = await axios.get(`${URL_BE}/vehicles?q=${keyword}`);
        return response.data;
    } catch (error) {
        console.error("Error searching vehicles:", error);
        alert("Có lỗi xảy ra khi tìm kiếm!");
        return [];
    }
}
export async function findById(id) {
    try {
        const response = await axios.get(`${URL_BE}/vehicles/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching vehicle details:", error);
        alert("Có lỗi xảy ra khi tải chi tiết phương tiện!");
        return null;
    }
}
