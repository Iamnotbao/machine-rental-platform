import { SectionCard } from '@/components/common/SectionCard';
import { PageHeading } from '@/components/common/PageHeading';
import { EmptyState } from '@/components/feedback/StateViews';
import styles from './reports.module.css';
export function ReportPage() {
  return (
    <div>
      <PageHeading
        eyebrow="Insights"
        title="Reports"
        description="A structured home for operational reporting."
      />
      <div className={styles.grid}>
        {['Revenue', 'Rental performance', 'Machine utilization', 'Customer activity'].map(
          (title) => (
            <SectionCard key={title} title={title}>
              <EmptyState
                description="Analytics will be connected after reporting requirements and API contracts are defined."
                title="Report foundation"
              />
            </SectionCard>
          ),
        )}
      </div>
    </div>
  );
}
