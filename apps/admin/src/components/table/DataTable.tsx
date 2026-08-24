import { Link } from 'react-router-dom';
import { Badge } from '@machine-rental/ui';
import styles from './data-table.module.css';

export interface TableRow {
  id: string;
  cells: string[];
  statusIndex?: number;
  href?: string;
}

export function DataTable({
  columns,
  rows,
  emptyLabel,
}: {
  columns: string[];
  rows: TableRow[];
  emptyLabel: string;
}) {
  if (rows.length === 0) return <div className={styles.empty}>{emptyLabel}</div>;
  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
            <th>
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.cells.map((cell, index) => (
                <td key={`${row.id}-${index}`}>
                  {index === row.statusIndex ? <Badge>{cell}</Badge> : cell}
                </td>
              ))}
              <td>{row.href ? <Link to={row.href}>View</Link> : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TablePagination({ label }: { label: string }) {
  return (
    <footer className={styles.pagination}>
      <span>{label}</span>
      <div>
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </div>
    </footer>
  );
}
