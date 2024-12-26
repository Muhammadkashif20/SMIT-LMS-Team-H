import React from "react";
import { useParams } from "react-router-dom";

const AssignmentDetail = () => {
  const { id } = useParams();
  const assignments = [
    {
      id: 1,
      title: "Dynamic Routing Using Dummy JSON API",
      detail: "Learn how to use React Router for dynamic routing.",
    },
    {
      id: 2,
      title: "Create Todo App Using useState and Components",
      detail: "Build a functional Todo App using React state.",
    },
    {
      id: 3,
      title: "Build a Blog Using React and Firebase",
      detail: "Integrate Firebase with React to create a blog.",
    },
    {
      id: 4,
      title: "Create a Responsive Portfolio Website",
      detail: "Design and develop a portfolio website.",
    },
    {
      id: 5,
      title: "Develop a Weather App Using React",
      detail: "Fetch and display weather data using APIs.",
    },
  ];
  const assignmentIdFind = assignments.find((data) => data.id == id);

  return (
    <div    >
      {assignmentIdFind ? (
        <>  
          <h1>{assignmentIdFind.title}</h1>
          <p>{assignmentIdFind.detail}</p>
        </>
      ) : (
        <h1>Assignment Not Found</h1>
      )}
    </div>
  );
};

export default AssignmentDetail;
