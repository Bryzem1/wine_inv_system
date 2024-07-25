import { useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { WineList } from "../utils/types";

const WineLLTable = ({ wineLists }: { wineLists: WineList[] }) => {
  const columns = useMemo<MRT_ColumnDef<WineList>[]>(
    () => [
      {
        accessorKey: "listName",
        header: "列表名称",
        size: 200,
      },
      {
        accessorKey: "creationDate",
        header: "创建日期",
        size: 150,
      },
      {
        accessorKey: "link",
        header: "链接",
        size: 250,
        Cell: ({ cell }) => (
          <a href={cell.getValue() as string} target="_blank" rel="noopener noreferrer">
            {cell.getValue() as string}
          </a>
        ),
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={wineLists} />;
};

export default WineLLTable;
