import axios from "axios";

const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/lover');
        return response.data;
    } catch (error) {
        console.log("Lỗi khi gọi API", error);
        throw error;
    }
}

export default getUsers;