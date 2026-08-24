import { useState } from 'react';
import { Button } from '@machine-rental/ui';
import { PageHeading } from '@/components/common/PageHeading';
import { SectionCard } from '@/components/common/SectionCard';
import styles from './settings.module.css';
const sections = ['General', 'Profile', 'Notifications', 'Security', 'Appearance'] as const;
export function SettingsPage() {
  const [active, setActive] = useState<string>(sections[0] ?? 'General');
  return (
    <div>
      <PageHeading title="Settings" description="Shape the operational workspace for your team." />
      <div className={styles.layout}>
        <nav aria-label="Settings sections" className={styles.tabs}>
          {sections.map((section) => (
            <button
              className={active === section ? styles.active : undefined}
              key={section}
              onClick={() => setActive(section)}
              type="button"
            >
              {section}
            </button>
          ))}
        </nav>
        <SectionCard
          title={active}
          description="This section is ready for future configuration fields."
        >
          <div className={styles.placeholder}>
            <strong>{active} settings</strong>
            <p>Configuration will be connected to the Admin service in a future phase.</p>
            <Button variant="secondary">Save preferences</Button>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
