import styles from './page.module.css';

export function AccountPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>ACCOUNT</p>
        <h1>Tài khoản của tôi</h1>
        <p>Quản lý thông tin tài khoản và các đơn thuê máy của bạn.</p>
      </section>
    </main>
  );
}

export default AccountPage;
