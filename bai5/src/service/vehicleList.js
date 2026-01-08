export const vehicleList = [
    {
        id: 1,
        num: 2002,
        owner: "Ho",
        date: "12/12/2000"
    },
    {
        id: 2,
        num: 2445,
        owner: "Van",
        date: "10/10/2000"
    },
    {
        id: 3,
        num: 2255,
        owner: "Tinh",
        date: "05/02/2000"
    }
];

export function getAll() {
    return [...vehicleList];
}

export function deleteById(id) {
    const index = vehicleList.findIndex(vehicle => vehicle.id === id);
    if (index !== -1) {
        vehicleList.splice(index, 1);
    }
}

export function addVehicle(vehicle) {
    const newVehicle = {
        ...vehicle,
        id: vehicleList.length > 0 ? Math.max(...vehicleList.map(v => v.id)) + 1 : 1
    };
    vehicleList.push(newVehicle);
}
export function searchVehicle(keyword) {
    return vehicleList.filter(vehicle => vehicle.num.includes(keyword));
}
export function findById(id) {
    return vehicleList.find(vehicle => vehicle.id === id);
}