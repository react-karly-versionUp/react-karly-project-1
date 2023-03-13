import styles from './App.module.css';
import mainBannerPrice from "./assets/main/banner05.png";
import mainBannerFruit from "./assets/main/banner01.png";
import mainBannerCard from "./assets/main/banner02.png";
import mainBannerPurple from "./assets/main/banner03.png";
import jjolmyeon from "./assets/main/product01.png"
import sunCushion from "./assets/main/product02.png"
import hyeonmi from "./assets/main/product03.png"
import frosch from "./assets/main/product04.png"


function App() {
  return (
    <div>
      <header className={styles.header}><h1>헤더 영역</h1></header>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <h2 className={styles['a11y-hidden']}>메인베너</h2>
          <ul className={styles['main-banner']}>
            <li className={styles['main-banner-item']}>
              <a href="/">
                <img src={mainBannerPrice} alt="이 주의 특가" />
              </a>
            </li>
            <li className={styles['banner-item']}>
              <a href="/">
                <img src={mainBannerFruit} alt="컬리의 과일 가게" />
              </a>
            </li>
            <li className={styles['banner-item']}>
              <a href="/">
                <img src={mainBannerCard} alt="이달의 카드 혜택" />
              </a>
            </li>
            <li className={styles['banner-item']}>
              <a href="/">
                <img src={mainBannerPurple} alt="컬리 퍼플 위크" />
              </a>
            </li>
          </ul>
        </nav>

        <section className={styles['recommend-products']}>
          <h2>이 상품 어때요?</h2>
          <ul className={styles['recommend-products-list']}>
            <li className={styles['recommend-products-item']}>
              <a href="/" />
              <img src={jjolmyeon} alt="풀무원 탱탱쫄면 4개입" />
              <p>[풀무원] 탱탱쫄면 (4개입)</p>
              <p>4,980원</p>
            </li>

            <li className={styles['recommend-products-item']}>
              <a href="/" />
              <img src={sunCushion} alt="온더바디 죠르디 시카 자석 선쿠션" />
              <p>[온더바디] 죠르디 시카 자석 선쿠션</p>
              <p>32,500원</p>
            </li>

            <li className={styles['recommend-products-item']}>
              <a href="/" />
              <img src={hyeonmi} alt="유기농 밀키퀸 현미 4kg" />
              <p>유기농 밀키퀸 현미 4kg</p>
              <p>25,000원</p>
            </li>

            <li className={styles['recommend-products-item']}>
              <a href="/" />
              <img src={frosch} alt="프로쉬 베이비 세탁세" />
              <p>[프로쉬] 베이비 세탁세</p>
              <p> 24% </p>
              <p>18,900원</p>
              <p>24,900원</p>
            </li>
          </ul>
        </section>

        <section className={styles['line-banner']}>
          <h2 className={styles['a11y-hidden']}>퍼플 위크</h2>
          <a href="/">
            <img src={mainBannerPurple} alt="더 풍성해진 10월의 퍼플위크" />
          </a>
        </section>

        <section className={styles['sale-products']}>
          <h2>놓치면 후회할 가격</h2>
          <ul className={styles['sale-products-list']}>
            <li className={styles['sale-products-item']}>
              <a href="/" />
              <img src={jjolmyeon} alt="풀무원 탱탱쫄면 4개입" />
              <p>[풀무원] 탱탱쫄면 (4개입)</p>
              <p>4,980원</p>
            </li>

            <li className={styles['sale-products-item']}>
              <a href="/" />
              <img src={sunCushion} alt="온더바디 죠르디 시카 자석 선쿠션" />
              <p>[온더바디] 죠르디 시카 자석 선쿠션</p>
              <p>32,500원</p>
            </li>

            <li className={styles['sale-products-item']}>
              <a href="/" />
              <img src={hyeonmi} alt="유기농 밀키퀸 현미 4kg" />
              <p>유기농 밀키퀸 현미 4kg</p>
              <p>25,000원</p>
            </li>

            <li className={styles['sale-products-item']}>
              <a href="/" />
              <img src={frosch} alt="프로쉬 베이비 세탁세" />
              <p>[프로쉬] 베이비 세탁세</p>
              <p> 24% </p>
              <p>18,900원</p>
              <p>24,900원</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>푸터<h1>푸터 영역</h1></footer>
    </div>
  );
}

export default App;
