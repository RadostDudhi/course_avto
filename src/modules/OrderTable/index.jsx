import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useState } from "react";

interface DataType {
  key: React.Key;
  status: string;
  customer: string;
  totalPrice: number;
  createdAt: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Number",
    dataIndex: "key",
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "Draft",
        value: "draft",
      },
      {
        text: "In Process",
        value: "In Process",
      },
      {
        text: "Partially Received",
        value: "Partially Received",
      },
      {
        text: "Received",
        value: "Received",
      },
      {
        text: "Canceled",
        value: "Canceled",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the status started with `value`
    onFilter: (value: string, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
    sortDirections: ["descend"],
  },
  {
    title: "Customer",
    dataIndex: "customer",
  },
  {
    title: "Total Price",
    dataIndex: "totalPrice",
    sorter: (a, b) => a.totalPrice - b.totalPrice,
  },
  {
    title: "Creation Date",
    dataIndex: "createdAt",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const OrderTable = ({ orders }) => {
  return <Table columns={columns} dataSource={orders} onChange={onChange} />;
};

export default OrderTable;
