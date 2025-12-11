import { setRequestLocale, getTranslations } from 'next-intl/server';
import LocaleSwitcher from '@/components/LocaleSwitcher';


export const dynamic = 'force-static';
// export const revalidate = false;

import Nav from '@/components/nav';
// import { useTranslations } from 'next-intl';

export default async function Home({
  params
}: {
  params: { locale: string };
}) {

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Homepage');

  return (
    <div>
      <Nav />

      <div>
        Full stack developer
      </div>
      <div>
        systems engineer
      </div>

      {/* <!-- Each section has link to it and a link to its more detailed page --> */}
      {/* <!-- About me --> */}
      <section>
        <h2>About me</h2>
        {/* <!-- simple poster board of me --> */}
        {/* <!-- went to trent, recent grad, loves ..., experience with geo, archi, trivia, loves research --> */}
        <div></div>
      </section>


      {/* <!-- Skills --> */}
      <section>
        {/* <!-- maybe sum all the skills and then have them split in the skills page */}
         {/* just so its smaller on the main page --> */}
        <h2>Code and craft</h2>

        <div>
          <h3>Languages</h3>
          <p>Webdev: HTML, CSS</p>
          {/* <!-- Languages I am fluent in and use often --> */}
          <p>Core: C#, Java, Python, JavaScript/Typescript, C++</p>
          {/* <!-- Languages I am literate in and interested in mastering --> */}
          <p>Periphery: Rust, Bash, Go, C, erlang, gleam</p>
        </div>

        <div>
          <h3>Frameworks and Libraries</h3>
          <p>Web development: React, Next, Vue</p>
          <p>NodeJS, Spring</p>
          <p>Cross-platform: Electron</p>
          <p>Backend: Express, Flask</p>
          <p>Postgres, MongoDB</p>
        </div>

        <div>
          <h3>Tools</h3>
          <p>Testing: Jest, Puppeteer, Playwright</p>
        </div>

        <div>
          <h3>Cloud and DevOps</h3>
          <p>Deployment: Github pages, AWS</p>
          <p>: Github Actions</p>
          <p>AWS: </p>
        </div>
      </section>

      <section>
        <h2>Experiences</h2>
        <div></div>
      </section>

      {/* <!-- Projects --> */}
      <section>
        <h2>Projects</h2>
        <div>Coming soon</div>
      </section>

      {/* <!-- References --> */}
      <section>
        <h2>Endorsements</h2>
      </section>
    </div>
  );
}
