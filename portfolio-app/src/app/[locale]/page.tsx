import { setRequestLocale, getTranslations } from 'next-intl/server';

export const dynamic = 'force-static';
// export const revalidate = false;

import Nav from '@/components/nav';
import Footer from '@/components/footer';
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
      {/* maybe number them
      1 about me (full stack & systems), based, school, fav lang, years exp, langs
      2 tech 
      3 experience
      4 projects
      5 contact */}


      {/* <!-- Each section has link to it and a link to its more detailed page --> */}
      {/* <!-- About me --> */}
      <section>
        <h2>About me</h2>

        <div>
          Full stack developer
        </div>
        <div>
          systems engineer
        </div>

        {/* <!-- simple poster board of me --> */}
        {/* <!-- went to trent, recent grad, loves ..., experience with geo, archi, trivia, loves research --> */}
        {/* relocation? */}
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
          {/* <p>Others: Rust, Bash, Go, C, erlang, gleam</p> */}
        </div>

        <div>
          <h3>Frameworks and Libraries</h3>
          <p>Web development: React, Next, Vue</p>
          
          <p>NodeJS, ASP.NET</p>
          <p>Cross-platform: Electron</p>
          <p>Backend: Express, Flask</p>
          <p>Postgres, MongoDB</p>
        </div>

        <div>
          <h3>Other Tools</h3>
          <p>Testing: Jest, Puppeteer, Playwright</p>
          <p>Cloud and DevOps: Github pages, Github actions, AWS</p>
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
      {/* <section>
        <h2>Endorsements</h2>
      </section> */}

      <Footer />
    </div>
  );
}
