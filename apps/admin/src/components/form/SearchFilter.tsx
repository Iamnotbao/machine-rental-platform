import { Button, Input } from '@machine-rental/ui';
import styles from './search-filter.module.css';
export function SearchFilter({
  placeholder = 'Search records',
  onSearch,
}: {
  placeholder?: string;
  onSearch?: (value: string) => void;
}) {
  return (
    <div className={styles.toolbar}>
      <Input
        aria-label={placeholder}
        onChange={(event) => onSearch?.(event.target.value)}
        placeholder={placeholder}
      />
      <Button variant="secondary">Filter</Button>
    </div>
  );
}
