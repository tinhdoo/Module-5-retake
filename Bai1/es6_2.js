//bai1
let num = [1, 2, 3,4,5,6,7,8,9];

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNum = num.filter(isPrime);
console.log(primeNum);

//bai2
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    occupation: "developer",
    nativeplace: "American",
    city: "New York",
    hobbies: ["reading", "traveling", "photography"],
    languages: ["English", "Spanish"],
    education: {
        degree: "Bachelor",
        major: "Computer Science",
        university: "Harvard University"
    }
};
const {
    firstName,
    gender,
    education: { degree },
    languages: [english]
} = person;
const student = {
    firstName,
    gender,
    degree,
    english
};

console.log(student);

//bai3
const sv1 = {
  firstName: "John",
    gender: "male",
    degree: "Bachelor",
    english: "English"
}
const sv2 = {
    name: "John",
    gender: "male",
    degree: "Bachelor",
    english: "English"
}
const getInfo = ({ firstName = "Quân", degree = "NA" }) => {
    console.log(`firstName: ${firstName}`);
    console.log(`degree: ${degree}`);
};
getInfo(sv1);
getInfo(sv2);

//bai4
let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];

const hightthan4 =
    courses.filter(course => course.rating >= 4
);
console.log(hightthan4);

//bai5
const lowthan4 = courses.filter(course => course.rating < 4);
const newList = lowthan4.map(course => `${course.id} - ${course.title} - ${course.rating}`)
;
console.log(newList);

//bai6
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

const allCourses = [...courses, ...addedCourses];
console.log(allCourses);