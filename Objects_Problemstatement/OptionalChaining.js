const college = {
    name: "Chitkara University",
    courses: [
      {
        courseName: "Computer Science",
        enrolStudents: 120
      },
      {
        courseName: "BBA",
        enrolStudents: 80
      }
    ]
  };
  
const StudentCount = (college, courseName) => {
    const course = college.courses?.find(c => c.courseName === courseName);
     return course?.enrolStudents;
};
console.log(StudentCount(college, 'Computer Science'));
  


const CourseNotExist = (college, courseName) => {
    return college.courses?.find(c => c.courseName === courseName)?.enrolStudents;
};
console.log(CourseNotExist(college, 'Electrical'));
  