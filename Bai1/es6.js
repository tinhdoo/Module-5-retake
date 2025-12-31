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

// câu 1:
const highthan4 = courses.filter(course => course.rating >= 4);
console.log(highthan4);

// câu 2:
const newList = courses
    .filter(course => course.rating < 4)
    .map(course => `${course.id} - ${course.title} - ${course.rating}`);
console.log(newList);

// câu 3:
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