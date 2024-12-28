import React from "react";
import { Card, Button } from "antd";
import WebDev from "../../../../src/image/webdev2.jpeg";

const Courses = () => {
  const availableCourses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, and React from scratch.",
      duration: "3 Months",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Data Science Mastery",
      description: "Master Python, Machine Learning, and Data Visualization.",
      duration: "4 Months",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "UI/UX Design Essentials",
      description: "Understand design principles and tools like Figma.",
      duration: "2 Months",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build mobile apps using Flutter and React Native.",
      duration: "5 Months",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking and cybersecurity basics.",
      duration: "6 Months",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Artificial Intelligence Basics",
      description:
        "Dive into AI concepts, algorithms, and practical applications.",
      duration: "3 Months",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="my-5 overflow-hidden">
      <h1 className="text-center font-semibold text-2xl">All Courses</h1>
      <div className="grid grid-cols-2 ms-16 me-60 mb-5">
        {availableCourses.map((courses) => {
          return (
              <Card className="w-[380px] ml-64 mt-8 shadow-md rounded-lg">
                <img
                  src={courses.image}
                  alt="Web Development Bootcamp"
                  className="w-[380px] h-[200px] object-cover rounded-lg mb-4"
                />
                <h1 className="font-semibold text-[1.3rem] text-gray-800 mb-2 text-left w-full">
                  {courses.title}
                </h1>
                <p className="text-gray-600 text-base font-medium mb-1 text-left w-full">
                  {courses.description}
                </p>
                <p className="text-gray-500 text-[0.9rem] italic mb-4 text-left w-full">
                  {courses.duration}
                </p>
                <Button type="primary" className="w-full">
                  Enroll Now
                </Button>
              </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
