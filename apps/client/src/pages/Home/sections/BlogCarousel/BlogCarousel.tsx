import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@machine-rental/ui';
import { BlogCard } from '@/features/blogs/components/BlogCard';
import { useBlogArticles } from '@/features/blogs/hooks/useBlogs';
import { ROUTES } from '@/constants/route.constants';
import styles from './BlogCarousel.module.css';

const PAGE_SIZE=3;
export function BlogCarousel(){
 const {data=[],isLoading}=useBlogArticles(); const [page,setPage]=useState(0); const [paused,setPaused]=useState(false);
 const featured=useMemo(()=>data.filter((item)=>item.featured),[data]); const pageCount=Math.max(1,Math.ceil(featured.length/PAGE_SIZE)); const visible=featured.slice(page*PAGE_SIZE,page*PAGE_SIZE+PAGE_SIZE);
 useEffect(()=>{if(paused||pageCount<=1)return; const timer=window.setInterval(()=>setPage((current)=>(current+1)%pageCount),4500); return()=>window.clearInterval(timer)},[paused,pageCount]);
 const prev=()=>setPage((current)=>(current-1+pageCount)%pageCount); const next=()=>setPage((current)=>(current+1)%pageCount);
 return <section className={styles.section}><Container><div className={styles.heading}><div><span>TIN TỨC & KIẾN THỨC</span><h2>Cập nhật mới từ Rentora</h2><p>Hướng dẫn chọn server, bảo mật và vận hành hạ tầng thực tế.</p></div><Link to={ROUTES.news}>Xem tất cả bài viết →</Link></div><div className={styles.carousel} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)}><button className={`${styles.arrow} ${styles.prev}`} type="button" onClick={prev} aria-label="Bài viết trước">‹</button><div className={styles.viewport}>{isLoading?<p>Đang tải bài viết...</p>:visible.map((article)=><BlogCard key={article.id} article={article}/>)}</div><button className={`${styles.arrow} ${styles.next}`} type="button" onClick={next} aria-label="Bài viết tiếp theo">›</button></div><div className={styles.pages}>{Array.from({length:pageCount},(_,index)=><button key={index} type="button" aria-label={`Trang ${index+1}`} className={index===page?styles.active:''} onClick={()=>setPage(index)}>{index+1}</button>)}</div></Container></section>
}
