import { useMemo } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_TableOptions,
} from "material-react-table";
import { Wine } from "../utils/types";

const Table = ({ data }: { data: Wine[] }) => {
  const columns = useMemo<MRT_ColumnDef<Wine>[]>(
    () => [
      {
        accessorKey: "name",
        header: "名字",
        size: 150,
      },
      {
        accessorKey: "vintage",
        header: "年份",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "价格",
        size: 200,
      },
      {
        accessorKey: "quantity",
        header: "数量/支",
        size: 150,
      },
      {
        accessorKey: "origin",
        header: "产地",
        size: 150,
      },
    ],
    []
  );

  const tableOptions: MRT_TableOptions<Wine> = {
    columns,
    data,
  };

  return <MaterialReactTable {...tableOptions} />;
};

export default Table;
