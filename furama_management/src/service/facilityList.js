import axios from "axios";

const URL_BE = "http://localhost:3000";

export const getAllFacilities = async () => {
    try {
        const [villaRes, houseRes, roomRes] = await Promise.all([
            axios.get(`${URL_BE}/villa`),
            axios.get(`${URL_BE}/house`),
            axios.get(`${URL_BE}/room`)
        ]);

        return {
            villa: villaRes.data,
            house: houseRes.data,
            room: roomRes.data
        };
    } catch (error) {
        console.error("Error fetching all facilities:", error);
        return { villa: [], house: [], room: [] };
    }
};

export const addFacility = async (facilityType, data) => {
    return await axios.post(`${URL_BE}/${facilityType}`, data);
};

export const getFacilityById = async (facilityType, id) => {
    const response = await axios.get(`${URL_BE}/${facilityType}/${id}`);
    return response.data;
};

export const updateFacility = async (facilityType, id, data) => {
    return await axios.put(`${URL_BE}/${facilityType}/${id}`, data);
};

export const deleteFacility = async (facilityType, id) => {
    return await axios.delete(`${URL_BE}/${facilityType}/${id}`);
};