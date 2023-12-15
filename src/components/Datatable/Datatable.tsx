import { Link } from "react-router-dom";
import "./Datatable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

interface Props {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}

const Datatable = (props: Props) => {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action flex gap-1">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img className="w-5  h-5" src="/view.svg" alt="" />
          </Link>
          <div className="delete">
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid bg-white p-5  "
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 1000 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnFilter
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default Datatable;
