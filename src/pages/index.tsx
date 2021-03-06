import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { FaArrowRight } from 'react-icons/fa';
import { Section } from '../components/SectionMotion';
import styles from '../styles/pages/Landing.module.css';

export default function Landing(): JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <header>
          <img src="/logo-white.svg" alt="" />
          <h2>Saúde durante o home Office</h2>
        </header>
        <button onClick={() => router.push('/Login')}>
          Entrar
          <FaArrowRight />
        </button>

        <Section direction="left">
          <div>
            <h3>O Problema...</h3>
            <img className={styles.imgMobile} src="/developer.svg" alt="" />
            <p>
              O <strong>estique.se</strong> foi criado pensando na atual
              situação em que nos encontramos: Devido à pandemia, muitos de nós
              estamos trabalhando em regime de home office, mas muitos, assim
              como eu, passam horas em frente ao computador e nos esquecemos de
              se movimentar, o que acaba prejudicando nossa saúde.
            </p>
          </div>
          <img src="/developer.svg" alt="" />
        </Section>

        <Section direction="right">
          <img src="/screenshotHome.jpg" alt="" />
          <div>
            <h3>A Solução!</h3>
            <img
              className={styles.imgMobile}
              src="/screenshotHome.jpg"
              alt=""
            />
            <p>
              Estique-se! mas de uma forma mais divertida. Utilizando o metodo
              pomodoro que propõe uma divisão da jornada em intervalos de 25
              minutos. A cada jornada cumprida o aplicativo ira te indicar algum
              alongamento a ser feito. A cada alongamento cumprido você ganha
              experiência!
            </p>
          </div>
        </Section>

        <Section direction="left">
          <div>
            <h3>Seja o melhor!</h3>
            <img
              className={styles.imgMobile}
              src="/screenshotLeaderboard.jpg"
              alt=""
            />
            <p>
              Com as experiências ganhas é possível subir de nivel e no final
              compartilhar com seus amigos!
            </p>
          </div>
          <img src="/screenshotLeaderboard.jpg" alt="" />
        </Section>
      </div>
    </div>
  );
}
