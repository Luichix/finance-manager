import React from "react";
import styles from "./Index.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <div className={styles.footer__firstBox}>
          <div className={styles.footer__sectionContainer}>
            <section>
              <h3>Compania</h3>
              <a href="#">Sobre nosotros</a>
              <a href="#">Transacciones</a>
              <a href="#">Estadisticas</a>
              <a href="#">Contactanos</a>
            </section>
            <section>
              <h3>Compania</h3>
              <a href="#">Sobre nosotros</a>
              <a href="#">Transacciones</a>
              <a href="#">Estadisticas</a>
              <a href="#">Contactanos</a>
            </section>
            <section>
              <h3>Compania</h3>
              <a href="#">Sobre nosotros</a>
              <a href="#">Transacciones</a>
              <a href="#">Estadisticas</a>
              <a href="#">Contactanos</a>
            </section>
          </div>
        </div>
        <div className={styles.footer__secondBox}>
          <p>&copy; 2024 - All rights reserved</p>
          <div className={styles.footer__social}>
            <a href="#">
              <svg>
                <use href="public/Icons/sprite.svg#search"></use>
              </svg>
            </a>
            <a href="#">
              <svg>
                <use href="public/Icons/sprite.svg#search"></use>
              </svg>
            </a>
            <a href="#">
              <svg>
                <use href="public/Icons/sprite.svg#search"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
