import React from "react";
import { Table } from "antd";
const ShowAssignment = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      viewBtn:`<button>View</button>`,
      submitBtn:`<button>Submit</button>`,

    },
    {
      key: "2",
      name: "John",

    },
  ];

  const columns = [
    {
      title: "New Assignments",
      dataIndex: "name",
      key: "name",
    },
    {
      dataIndex: "age",
      key: "age",
    },
    {
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div className="mx-72 my-6">
      <h1 className=" font-semibold text-2xl">View Assignments!</h1>
      <Table className="my-6" dataSource={dataSource} columns={columns} pagination={false} />

    </div>
  );
};

export default ShowAssignment;
