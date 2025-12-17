import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from "next/image";

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


      <section className='text-white border-t border-white/20'>
        <h2>About me</h2>

        {/* Container */}
        <div className='grid grid-cols-12 w-full'>

          {/* What I do */}
          <div className='col-span-12 border-b md:border-b-0 md:border-r border-white/20 p-8 flex flex-row  justify-center '>

            <div className='col-span-6 md:col-span-4 border-b border-r border-white/20 p-8 '>
              <span className='flex [&>*]:mr-3'>
                <Image src="/white-icons/white-icon.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/white-icons/white-icon.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/white-icons/white-icon.png" alt="icon" className='mb-3' width={20} height={20} />
              </span>

              <strong>Full Stack Developer</strong>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className='col-span-6 md:col-span-4 border-b border-r md:border-r border-white/20 p-8'>

              <strong>Systems Engineer</strong>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className='col-span-12 md:col-span-4 border-b md:border-r-0 border-white/20 p-8'>
              <strong>Embedded Systems</strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>

          {/* Education */}
          <div className='col-span-12 grid grid-cols-12 border-b  md:border-r border-white/20 p-8'>

            {/* School Logo */}
            <div className='col-span-2 '>
              <Image src={"/white-icons/white-icon.png"} alt=''
                className='mx-auto my-auto' width={120} height={120} />
            </div>

            <div className='col-span-8'>
              <p className='flex justify-between'><span>B.Sc Computer Science</span><span>2021-2025</span></p>

              {/* specializations, background in geo */}
              Specialization in Software engineering and theoretical computing
              with a background in mathematics (graphs, probability)
              and Geography (ArcGIS, mapping, satellite data)
            </div>

            <div className='col-span-2 [&>*]:mx-auto'>
              <div>
                <Image src={"/white-icons/white-icon.png"} alt=''     width={45} height={45} />
              </div>
              <div>
                1+ year of professional software experience
              </div>
            </div>

          </div>

          {/* Misc */}
          <div className='col-span-12 grid grid-cols-12'>

            <div className='col-span-3'>
              <Image src={"/white-icons/white-icon.png"} alt='' width={45} height={45} />
              Based in Ontario
              Willing to relocate in Canada
            </div>
            
            <div className='col-span-3'>
              based in Mississauga, GTA
            </div>

            <div className='col-span-3'>
              Languages

              <div>
                English Fluent/Native
              </div>
              
              <div>
                French B1/B2 Proficiency
              </div>
              
            </div>

            <div className='col-span-3'>
              Key languages 
              C#, C++, JS, TS
            </div>

            
          </div>

          {/* Where I am based */}
          {/* Based in Ontario, can relocate in Canada, french/english */}

          {/* Interests */}
          {/* Favourite lang (C# ASP.NET), interests (HPC,)*/}


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
        <p>In some order of proficiency</p>

        <div>
          <h3>Languages</h3>
          <p>Webdev: HTML, CSS</p>
          {/* <!-- Languages I am fluent in and use often --> */}
          <p>Core: JavaScript/Typescript, C#, Python, C++</p>
          {/* <!-- Languages I am literate in and interested in mastering --> */}
          {/* <p>Others: Rust, Go, Java</p> */}
        </div>

        <div>
          <h3>Frameworks and Libraries</h3>
          <p>Web development: React, Next, Vue, NodeJS, ASP.NET</p>
          <p>Postgres, MongoDB, Electron, Express, Flask</p>
          <p></p>
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
