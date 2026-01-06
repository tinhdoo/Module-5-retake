export const vehicleList = [
    {
        id: 1,
        num: 2002,
        owner: "Ho",
        date: "12/12/2000"
    } ,  {
        id: 2,
        num: 2445,
        owner: "Van",
        date: "10/10/2000"
    } ,  {
        id: 3,
        num: 2255,
        owner: "Tinh",
        date: "05/02/2000"
    }
];
export function getAll(){
    return [...vehicleList]
}
export function deleteById(id){
    for (let i = 0; i < vehicleList.length; i++) {
        const element = vehicleList[i];
        if (element.id == id) {
            vehicleList.splice(i, 1);
        }
    }
}