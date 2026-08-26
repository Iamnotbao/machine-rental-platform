import { Link } from 'react-router-dom';
import { Container } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
import styles from './AboutPreview.module.css';

export function AboutPreview(){return <section className={styles.section}><Container className={styles.grid}><div><span className={styles.kicker}>VỀ RENTORA</span><h2>Một nơi để tìm, thuê và quản lý máy chủ rõ ràng hơn.</h2><p>Thay vì trao đổi cấu hình và thanh toán rời rạc, Rentora hướng đến gom toàn bộ hành trình thuê máy vào một trải nghiệm: tìm provider, chọn máy, booking, billing, thanh toán và theo dõi lịch sử.</p><Link to={ROUTES.about}>Xem đầy đủ giới thiệu →</Link></div><div className={styles.values}><article><strong>01</strong><h3>Minh bạch cấu hình</h3><p>Thông số, số lượng sẵn có và mức giá được trình bày theo cùng một cấu trúc.</p></article><article><strong>02</strong><h3>Dễ quản lý</h3><p>Booking, giao dịch, ví và thông báo tập trung trong hồ sơ người dùng.</p></article><article><strong>03</strong><h3>Sẵn sàng tích hợp</h3><p>UI đang dùng mock service để backend có thể thay vào mà không viết lại page.</p></article></div></Container></section>}
