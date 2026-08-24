import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Button } from '@machine-rental/ui';
import { PageHeading } from '@/components/common/PageHeading';
import { SectionCard } from '@/components/common/SectionCard';
import { SearchFilter } from '@/components/form/SearchFilter';
import { DataTable, TablePagination } from '@/components/table/DataTable';
import type { TableRow } from '@/components/table/DataTable';
import { useDebounce } from '@/hooks/useDebounce';
import styles from './resource-page.module.css';

export function ResourceListPage({
  title,
  description,
  columns,
  rows,
  createLabel,
  onCreate,
}: {
  title: string;
  description: string;
  columns: string[];
  rows: TableRow[];
  createLabel?: string;
  onCreate?: () => void;
}) {
  const [search, setSearch] = useState('');
  const query = useDebounce(search.toLowerCase());
  const filteredRows = useMemo(
    () => rows.filter((row) => row.cells.join(' ').toLowerCase().includes(query)),
    [query, rows],
  );
  return (
    <div>
      <PageHeading
        title={title}
        description={description}
        action={createLabel ? <Button onClick={onCreate}>{createLabel}</Button> : undefined}
      />
      <SectionCard
        title={`${title} list`}
        description="Demo records are shown until the Admin API is connected."
      >
        <SearchFilter onSearch={setSearch} placeholder={`Search ${title.toLowerCase()}`} />
        <DataTable
          columns={columns}
          emptyLabel={`No ${title.toLowerCase()} found`}
          rows={filteredRows}
        />
        <TablePagination label={`${filteredRows.length} of ${rows.length} demo records`} />
      </SectionCard>
      <div className={styles.info}>
        Filters, pagination, and bulk actions are structured here for future service data.
      </div>
    </div>
  );
}

export function ResourceDetailPage({
  title,
  subtitle,
  fields,
  action,
}: {
  title: string;
  subtitle: string;
  fields: Array<[string, string]>;
  action?: ReactNode;
}) {
  return (
    <div>
      <PageHeading title={title} description={subtitle} action={action} />
      <SectionCard title="Overview">
        <dl className={styles.details}>
          {fields.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </SectionCard>
    </div>
  );
}
