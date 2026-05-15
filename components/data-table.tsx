import type { TableData } from "@/lib/lessons-data";

interface DataTableProps {
  table: TableData;
}

export function DataTable({ table }: DataTableProps) {
  const [header, ...rows] = table.rows;

  return (
    <div className="my-6">
      <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
        {table.title}
      </h4>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              {header.map((cell, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-semibold text-foreground"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-border hover:bg-muted/30 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 ${
                      cellIndex === 0 ? "font-mono text-primary" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
