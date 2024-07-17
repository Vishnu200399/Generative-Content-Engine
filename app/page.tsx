// "use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {

  return (
    <div>
      <div id="page1" className={styles.page}>
        <div id="nav" className={styles.nav}>
          <h1>AI Generator</h1>
          <div id="nav-part2" className={styles.navPart2}>
            <h3>Service</h3>
            <h3>About us</h3>
            <h3>Cases</h3>
          </div>
         <Link href="/dashboard">
         <Button><h1>Dashboard ➡️</h1></Button>
         </Link>
        </div>
        <div id="container" className={styles.container}>
          <div id="left" className={styles.left}>
            <h1>Unlimited </h1>
            <h1>pretendious</h1>
            <h1>
              Ideas<span><img src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></span>
            </h1>
          </div>
          <div id="right" className={styles.right}>
            <img src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
