import React from 'react';

import s from '../components/layout/ProjectLandingPage/styles.module.scss';

const PrivacyPage = () => {
  React.useEffect(() => {
    console.log(window);
  }, []);

  return (
    <main className={s.main}>
      <div className={s.innerContent}>
        <h3>Cookie List from Modus Labs</h3>
        <article><div id="ot-sdk-cookie-policy" /></article>
      </div>
    </main>
  );
};

export default PrivacyPage;
