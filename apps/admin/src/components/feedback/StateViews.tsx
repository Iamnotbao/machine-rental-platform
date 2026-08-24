import { Button, Skeleton } from '@machine-rental/ui';
import styles from './state-views.module.css';
export function LoadingState({ label = 'Loading data' }: { label?: string }) {
  return (
    <div aria-live="polite" className={styles.state}>
      <Skeleton className={styles.skeleton} />
      <span>{label}</span>
    </div>
  );
}
export function EmptyState({
  title,
  description,
  actionLabel,
}: {
  title: string;
  description: string;
  actionLabel?: string;
}) {
  return (
    <div className={styles.state}>
      <strong>{title}</strong>
      <span>{description}</span>
      {actionLabel ? <Button variant="secondary">{actionLabel}</Button> : null}
    </div>
  );
}
export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className={styles.state}>
      <strong>Unable to load this data</strong>
      <span>Try again or return later.</span>
      {onRetry ? (
        <Button onClick={onRetry} variant="secondary">
          Retry
        </Button>
      ) : null}
    </div>
  );
}
