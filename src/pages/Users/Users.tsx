import Datatable from "../../components/Datatable/Datatable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";

import { useState } from "react";

import Add from "../../components/Add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: () => {
      return (
        <div className="actions">
          <div className="view">Views</div>
          <div className="delete">Delete</div>
        </div>
      );
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    type: "string",
    width: 130,
  },
  {
    field: "lastName",
    headerName: "Last name",
    type: "string",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email ",
    type: "string",
    width: 250,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 150,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    width: 90,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="user">
      <div className="info">
        <div>User</div>
        <button
          className="uppercase bg-white text-black p-2 rounded-xl m-2 shadow-black"
          onClick={() => setOpen(true)}
        >
          add new user
        </button>
      </div>
      <Datatable slug="users" rows={userRows} columns={columns} />
      {open && <Add columns={columns} setOpen={setOpen} slug={"users"} />}
    </div>
  );
};

export default Users;
