import Datatable from "../../components/Datatable/Datatable";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

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
    field: "title",
    headerName: "Title",
    type: "string",
    width: 250,
  },
  {
    field: "color",
    headerName: "Color",
    type: "string",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 150,
  },
  {
    field: "producer",
    headerName: "Producer",
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
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    width: 150,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <div>Products</div>
        <button
          className="uppercase bg-white text-black p-2 rounded-xl m-2 shadow-black"
          onClick={() => setOpen(true)}
        >
          add new product
        </button>
      </div>
      <Datatable slug="products" rows={products} columns={columns} />
      {open && <Add columns={columns} setOpen={setOpen} slug={"products"} />}
    </div>
  );
};

export default Products;
