import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAccountDashboard, useUpdateAccountProfile } from '@/features/account/hooks/useAccountDashboard';
import type { CustomerProfile } from '@/features/account/types';
import styles from './page.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });

export function OrdersPage() { return <section className={styles.simple}><h1>Đơn thuê</h1><p>Lịch sử đơn thuê sẽ được nối backend ở phase sau.</p></section>; }
export function OrderDetailPage() { const { id } = useParams(); return <section className={styles.simple}><h1>Đơn {id}</h1><p>Chi tiết đơn sẽ lấy từ order service khi backend sẵn sàng.</p></section>; }

type Tab = 'info' | 'wallet' | 'transactions' | 'topups' | 'notifications';
interface AccountTab { id: Tab; label: string; description: string; }
const accountTabs: AccountTab[] = [
  { id: 'info', label: 'Thông tin cá nhân', description: 'Hồ sơ và thông tin liên hệ' },
  { id: 'wallet', label: 'Ví của tôi', description: 'Số dư và tiền đang giữ' },
  { id: 'transactions', label: 'Lịch sử giao dịch', description: 'Các biến động trong tài khoản' },
  { id: 'topups', label: 'Lịch sử nạp tiền', description: 'Các lần nạp tiền vào ví' },
  { id: 'notifications', label: 'Thông báo', description: 'Cập nhật từ hệ thống' },
];

export function ProfilePage() {
  const { data, isLoading } = useAccountDashboard();
  const updateProfile = useUpdateAccountProfile();
  const [tab, setTab] = useState<Tab>('info');
  const [draft, setDraft] = useState<CustomerProfile | null>(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const unreadCount = useMemo(() => data?.notifications.filter((item) => !item.read).length ?? 0, [data]);

  if (isLoading || !data) return <main className={styles.page}>Đang tải hồ sơ...</main>;

  const activeTab = accountTabs.find((item) => item.id === tab) ?? accountTabs[0];
  const initials = data.profile.name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join('') || 'U';
  const transactions = data.transactions.filter((item) => inDateRange(item.createdAt, fromDate, toDate));
  const topups = data.topups.filter((item) => inDateRange(item.createdAt, fromDate, toDate));

  const beginEdit = () => setDraft({ ...data.profile });
  const cancelEdit = () => setDraft(null);
  const saveProfile = async () => {
    if (!draft) return;
    await updateProfile.mutateAsync(draft);
    setDraft(null);
  };

  return (
    <main className={styles.page}>
      <div className={styles.accountLayout}>
        <aside className={styles.sidebar}>
          <div className={styles.profileCard}><div className={styles.avatar} aria-hidden="true">{initials}</div><div className={styles.profileIdentity}><span>TÀI KHOẢN</span><h1>{data.profile.name}</h1><p>@{data.profile.username}</p></div><div className={styles.profileMeta}><span>{data.profile.email}</span><span>{data.profile.company}</span></div></div>
          <nav className={styles.tabs} aria-label="Menu tài khoản">
            {accountTabs.map((item) => <button type="button" className={tab === item.id ? styles.active : ''} key={item.id} onClick={() => setTab(item.id)} aria-current={tab === item.id ? 'page' : undefined}><span className={styles.tabText}><strong>{item.label}</strong><small>{item.description}</small></span>{item.id === 'notifications' && unreadCount > 0 ? <b className={styles.badge}>{unreadCount}</b> : <span className={styles.chevron} aria-hidden="true">›</span>}</button>)}
          </nav>
          <div className={styles.sidebarFoot}><span>Khách hàng từ</span><strong>{new Date(data.profile.joinedAt).toLocaleDateString('vi-VN')}</strong></div>
        </aside>

        <section className={styles.content}>
          <header className={styles.contentHeader}>
            <div><span>TRUNG TÂM TÀI KHOẢN</span><h2>{activeTab?.label}</h2><p>{activeTab?.description}</p></div>
            {tab === 'wallet' && <div className={styles.balanceChip}><span>Số dư</span><strong>{money.format(data.wallet.balance)}</strong></div>}
            {tab === 'info' && !draft && <button type="button" className={styles.headerAction} onClick={beginEdit}>Chỉnh sửa thông tin</button>}
          </header>

          <div className={styles.panel}>
            {tab === 'info' && !draft && <div className={styles.infoGrid}><Field label="Tên hiển thị" value={data.profile.name}/><Field label="Tài khoản" value={data.profile.username}/><Field label="Email" value={data.profile.email}/><Field label="Điện thoại" value={data.profile.phone}/><Field label="Công ty" value={data.profile.company}/><Field label="Ngày tham gia" value={new Date(data.profile.joinedAt).toLocaleDateString('vi-VN')}/></div>}
            {tab === 'info' && draft && <div className={styles.editForm}><label>Tên hiển thị<input value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })}/></label><label>Tài khoản<input value={draft.username} disabled /></label><label>Email<input type="email" value={draft.email} onChange={(event) => setDraft({ ...draft, email: event.target.value })}/></label><label>Điện thoại<input value={draft.phone} onChange={(event) => setDraft({ ...draft, phone: event.target.value })}/></label><label className={styles.wideField}>Công ty<input value={draft.company} onChange={(event) => setDraft({ ...draft, company: event.target.value })}/></label><div className={styles.editActions}><button type="button" className={styles.saveButton} disabled={updateProfile.isPending} onClick={saveProfile}>{updateProfile.isPending ? 'Đang lưu...' : 'Lưu thay đổi'}</button><button type="button" className={styles.cancelButton} onClick={cancelEdit}>Hủy</button></div>{updateProfile.error && <p className={styles.formError}>{updateProfile.error.message}</p>}</div>}
            {tab === 'wallet' && <div className={styles.wallet}><article><span>Số dư khả dụng</span><strong>{money.format(data.wallet.balance)}</strong><small>Có thể dùng để thanh toán đơn thuê mới.</small></article><article><span>Đang giữ cho đơn thuê</span><strong>{money.format(data.wallet.reserved)}</strong><small>Số tiền tạm giữ cho các giao dịch đang xử lý.</small></article><button type="button">Nạp tiền vào ví (UI mock)</button></div>}
            {tab === 'transactions' && <><DateFilter fromDate={fromDate} toDate={toDate} setFromDate={setFromDate} setToDate={setToDate}/><Table headers={['Mã','Nội dung','Loại','Số tiền','Ngày','Trạng thái']} rows={transactions.map((item) => [item.id,item.description,item.type,money.format(item.amount),new Date(item.createdAt).toLocaleString('vi-VN'),item.status])}/></>}
            {tab === 'topups' && <><DateFilter fromDate={fromDate} toDate={toDate} setFromDate={setFromDate} setToDate={setToDate}/><Table headers={['Mã','Phương thức','Số tiền','Ngày','Trạng thái']} rows={topups.map((item) => [item.id,item.method,money.format(item.amount),new Date(item.createdAt).toLocaleString('vi-VN'),item.status])}/></>}
            {tab === 'notifications' && <div className={styles.notifications}>{data.notifications.map((item) => <article key={item.id} className={!item.read ? styles.unread : ''}><span className={styles.noticeDot} aria-hidden="true"/><div><h3>{item.title}</h3><p>{item.message}</p></div><time>{new Date(item.createdAt).toLocaleString('vi-VN')}</time></article>)}</div>}
          </div>
        </section>
      </div>
    </main>
  );
}

function inDateRange(value: string, fromDate: string, toDate: string) {
  const time = new Date(value).getTime();
  const from = fromDate ? new Date(`${fromDate}T00:00:00`).getTime() : Number.NEGATIVE_INFINITY;
  const to = toDate ? new Date(`${toDate}T23:59:59`).getTime() : Number.POSITIVE_INFINITY;
  return time >= from && time <= to;
}

function DateFilter({ fromDate, toDate, setFromDate, setToDate }: { fromDate:string; toDate:string; setFromDate:(value:string)=>void; setToDate:(value:string)=>void; }) {
  return <div className={styles.dateFilter}><div><span>Lọc theo ngày</span><p>Chọn khoảng thời gian cần xem.</p></div><label>Từ ngày<input type="date" value={fromDate} onChange={(event) => setFromDate(event.target.value)}/></label><label>Đến ngày<input type="date" value={toDate} min={fromDate || undefined} onChange={(event) => setToDate(event.target.value)}/></label><button type="button" onClick={() => { setFromDate(''); setToDate(''); }}>Xóa lọc</button></div>;
}
function Field({ label, value }: { label:string; value:string }) { return <article className={styles.field}><span>{label}</span><strong>{value}</strong></article>; }
function Table({ headers, rows }: { headers:string[]; rows:string[][] }) { return <div className={styles.tableWrap}><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.length ? rows.map((row,rowIndex) => <tr key={`${rowIndex}-${row.join('|')}`}>{row.map((cell,index) => <td key={`${rowIndex}-${index}`}>{cell}</td>)}</tr>) : <tr><td colSpan={headers.length} className={styles.emptyCell}>Không có dữ liệu trong khoảng thời gian đã chọn.</td></tr>}</tbody></table></div>; }
