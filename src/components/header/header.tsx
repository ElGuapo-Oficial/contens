import React from 'react';
import styles from "./header.module.css";
import Image from 'next/image'
import Link from 'next/link';

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      {/* <h1>Welcome to My Website</h1> */}
      <div className={styles.logo}>
        <Image
          src='/logo.webp'
          alt="Responsive Image"
          width={300}
          height={29}
        />
      </div>
      <nav>
          <ul>
            <li><Link href="/"><div>Inicio</div></Link></li>
            <li><Link href="/categories">Categorías</Link></li>
            <li><Link href="/filters">Buscar</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;
