import styles from "./page.module.css";
import MyBox from "@/components/box/box";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.categories}>
      <Link href='/filters'>
        <MyBox>
          <div className={styles.sizeBanner}>
            <div className={styles.size}>
              20FT
            </div>
            <Image
              src='/blueContainer.webp'
              alt="Responsive Image"
              width={350}
              height={350}
            />
          </div>
        </MyBox>
      </Link>
      <Link href='/filters'>
        <MyBox>
          <div className={styles.sizeBanner}>
            <div className={styles.size}>
              40FT
            </div>
            <Image
              src='/grayContainer.webp'
              alt="Responsive Image"
              width={350}
              height={350}
            />
          </div>
        </MyBox>
      </Link>
      <Link href='/filters'>
        <MyBox>
          <div className={styles.sizeBanner}>
            <div className={styles.size}>
              45FT
            </div>
            <Image
              src='/redContainer.webp'
              alt="Responsive Image"
              width={350}
              height={350}
            />
          </div>
        </MyBox>
      </Link>
      <Link href='/filters'>
        <MyBox>
          <div className={styles.sizeBanner}>
            <div className={styles.size}>
              Todos los contenedores
            </div>
            <Image
              src='/containers.webp'
              alt="Responsive Image"
              width={350}
              height={350}
            />
          </div>
        </MyBox>
      </Link>
    </div >
  );
}