import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAccountDashboard } from '@/features/account/hooks/useAccountDashboard';
import styles from './page.module.css';

const money = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

export function OrdersPage() {
  return (
    <section className={styles.simple}>
      <h1>Đơn thuê</h1>
      <p>Lịch sử đơn thuê sẽ được nối backend ở phase sau.</p>
    </section>
  );
}

export function OrderDetailPage() {
  const { id } = useParams();
  return (
    <section className={styles.simple}>
      <h1>Đơn {id}</h1>
      <p>Chi tiết đơn sẽ lấy từ order service khi backend sẵn sàng.</p>
    </section>
  );
}

type Tab = 'info' | 'wallet' | 'transactions' | 'topups' | 'notifications';

interface AccountTab {
  id: Tab;
  label: string;
  description: string;
}

const accountTabs: AccountTab[] = [
  { id: 'info', label: 'Thông tin cá nhân', description: 'Hồ sơ và thông tin liên hệ' },
  { id: 'wallet', label: 'Ví của tôi', description: 'Số dư và tiền đang giữ' },
  { id: 'transactions', label: 'Lịch sử giao dịch', description: 'Các biến động trong tài khoản' },
  { id: 'topups', label: 'Lịch sử nạp tiền', description: 'Các lần nạp tiền vào ví' },
  { id: 'notifications', label: 'Thông báo', description: 'Cập nhật từ hệ thống' },
];

export function ProfilePage() {
  const { data, isLoading } = useAccountDashboard();
  const [tab, setTab] = useState<Tab>('info');

  const unreadCount = useMemo(
    () => data?.notifications.filter((item) => !item.read).length ?? 0,
    [data],
  );

  if (isLoading || !data) {
    return <main className={styles.page}>Đang tải hồ sơ...</main>;
  }

  const activeTab = accountTabs.find((item) => item.id === tab) ?? accountTabs[0];
  const initials = data.profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'U';

  return (
    <main className={styles.page}>
      <div className={styles.accountLayout}>
        <aside className={styles.sidebar}>
          <div className={styles.profileCard}>
            <div className={styles.avatar} aria-hidden="true">{initials}</div>
            <div className={styles.profileIdentity}>
              <span>TÀI KHOẢN</span>
              <h1>{data.profile.name}</h1>
              <p>@{data.profile.username}</p>
            </div>
            <div className={styles.profileMeta}>
              <span>{data.profile.email}</span>
              <span>{data.profile.company}</span>
            </div>
          </div>

          <nav className={styles.tabs} aria-label="Menu tài khoản">
            {accountTabs.map((item) => (
              <button
                type="button"
                className={tab === item.id ? styles.active : ''}
                key={item.id}
                onClick={() => setTab(item.id)}
                aria-current={tab === item.id ? 'page' : undefined}
              >
                <span className={styles.tabText}>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
                {item.id === 'notifications' && unreadCount > 0 ? (
                  <b className={styles.badge}>{unreadCount}</b>
                ) : (
                  <span className={styles.chevron} aria-hidden="true">›</span>
                )}
              </button>
            ))}
          </nav>

          <div className={styles.sidebarFoot}>
            <span>Khách hàng từ</span>
            <strong>{new Date(data.profile.joinedAt).toLocaleDateString('vi-VN')}</strong>
          </div>
        </aside>

        <section className={styles.content}>
          <header className={styles.contentHeader}>
            <div>
              <span>TRUNG TÂM TÀI KHOẢN</span>
              <h2>{activeTab?.label}</h2>
              <p>{activeTab?.description}</p>
            </div>
            {tab === 'wallet' && (
              <div className={styles.balanceChip}>
                <span>Số dư</span>
                <strong>{money.format(data.wallet.balance)}</strong>
              </div>
            )}
          </header>

          <div className={styles.panel}>
            {tab === 'info' && (
              <div className={styles.infoGrid}>
                <Field label="Tên hiển thị" value={data.profile.name} />
                <Field label="Tài khoản" value={data.profile.username} />
                <Field label="Email" value={data.profile.email} />
                <Field label="Điện thoại" value={data.profile.phone} />
                <Field label="Công ty" value={data.profile.company} />
                <Field
                  label="Ngày tham gia"
                  value={new Date(data.profile.joinedAt).toLocaleDateString('vi-VN')}
                />
              </div>
            )}

            {tab === 'wallet' && (
              <div className={styles.wallet}>
                <article>
                  <span>Số dư khả dụng</span>
                  <strong>{money.format(data.wallet.balance)}</strong>
                  <small>Có thể dùng để thanh toán đơn thuê mới.</small>
                </article>
                <article>
                  <span>Đang giữ cho đơn thuê</span>
                  <strong>{money.format(data.wallet.reserved)}</strong>
                  <small>Số tiền tạm giữ cho các giao dịch đang xử lý.</small>
                </article>
                <button type="button">Nạp tiền vào ví (UI mock)</button>
              </div>
            )}

            {tab === 'transactions' && (
              <Table
                rows={data.transactions.map((item) => [
                  item.id,
                  item.description,
                  item.type,
                  money.format(item.amount),
                  new Date(item.createdAt).toLocaleString('vi-VN'),
                  item.status,
                ])}
              />
            )}

            {tab === 'topups' && (
              <Table
                rows={data.topups.map((item) => [
                  item.id,
                  item.method,
                  money.format(item.amount),
                  new Date(item.createdAt).toLocaleString('vi-VN'),
                  item.status,
                ])}
              />
            )}

            {tab === 'notifications' && (
              <div className={styles.notifications}>
                {data.notifications.map((item) => (
                  <article key={item.id} className={!item.read ? styles.unread : ''}>
                    <span className={styles.noticeDot} aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.message}</p>
                    </div>
                    <time>{new Date(item.createdAt).toLocaleString('vi-VN')}</time>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <article className={styles.field}>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function Table({ rows }: { rows: string[][] }) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row.join('|')}`}>
              {row.map((cell, index) => (
                <td key={`${rowIndex}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
