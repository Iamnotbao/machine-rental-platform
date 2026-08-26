import { Link } from 'react-router-dom';
import { Button, Container } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span /> HẠ TẦNG MÁY CHỦ LINH HOẠT</p>
          <h1>Thuê máy chủ vật lý nhanh, rõ giá và dễ quản lý.</h1>
          <p className={styles.summary}>Rentora kết nối khách hàng với nhiều nhà cung cấp máy chủ, giúp so sánh cấu hình, thời hạn thuê và chi phí trong một luồng đơn giản.</p>
          <div className={styles.actions}><Link to={ROUTES.machines}><Button>Xem máy chủ <span aria-hidden="true">→</span></Button></Link><Link className={styles.textLink} to={ROUTES.about}>Tìm hiểu Rentora <span aria-hidden="true">→</span></Link></div>
          <div className={styles.assurance}><div className={styles.avatars} aria-hidden="true"><i>DC</i><i>VN</i><i>24</i></div><p><strong>Nhiều cấu hình · nhiều provider</strong><br />Theo dõi booking, billing và thanh toán trong một tài khoản</p></div>
        </div>
        <div className={styles.visual} aria-label="Server infrastructure illustration" role="img">
          <div className={styles.visualTopline}>SERVER READY</div><div className={styles.sun} /><div className={styles.hillOne} /><div className={styles.hillTwo} />
          <div className={styles.serverRack}><span/><span/><span/><span/></div>
          <div className={styles.availability}><span>✓</span><div><strong>Cấu hình sẵn sàng</strong><small>Chọn và đặt thuê trực tuyến</small></div></div>
          <div className={styles.rating}><strong>24/7 <span>MONITOR</span></strong><small>Hạ tầng hướng đến vận hành ổn định</small></div>
        </div>
      </Container>
    </section>
  );
}
