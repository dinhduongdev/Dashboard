import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";
import "../../styles/variables.scss";
interface Props {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {
  return (
    <div className="add w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
      <div className="modal p-10 rounded-lg relative">
        <span
          className="close absolute top-2 right-4 cursor-pointer"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1 className="mb-10 text-2xl font-bold">Add new {props.slug}</h1>
        <form
          action=""
          className="max-w-[500px]  flex justify-between flex-wrap"
        >
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item flex flex-col gap-2 mb-5">
                <label className="text-xs" htmlFor="">
                  {column.headerName}
                </label>
                <input
                  className="p-2 bg-transparent text-white outline-none rounded"
                  type={column.type}
                  placeholder={column.field}
                />
              </div>
            ))}
          <button className="w-full p-3 bg-white text-black rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
