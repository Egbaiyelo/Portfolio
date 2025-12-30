import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from "next/image";

export const dynamic = 'force-static';
// export const revalidate = false;

import Nav from '@/components/nav';
import Footer from '@/components/footer';
import ProjectCard from '@/components/projectCard';

export default async function Home({
  params
}: {
  params: { locale: string };
}) {

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Homepage');


  const skillGroups = [
    { title: "Languages", skills: ["TypeScript", "Rust", "C++", "Python"] },
    { title: "Frontend", skills: ["React", "Next.js", "Tailwind", "Framer Motion"] },
    { title: "Backend", skills: ["Node.js", "PostgreSQL", "Redis", "gRPC"] }
  ];

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
        <h2 className='text-xl font-semibold mb-8 ml-16'>About me Board</h2>


        {/* <div className='w-full py-10 px-4'>proficiencies</div> */}

        {/* Container */}
        {/*+ When hover add colour to div */}
        <div className='grid grid-cols-12 w-full'>

          {/* What I do */}
          <div className='col-span-12 border-b md:border-b-0 md:border-r border-white/20 p-8 flex flex-row  justify-center '>

            {/* React, nodejs, tailwind, asp.net, js */}
            <div className='col-span-6 md:col-span-4 border-b border-r border-white/20 p-8 '>
              <span className='flex [&>*]:mr-3'>
                <Image src="/about-icons/react.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/nodejs.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/tailwind.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/dotnet.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/js.png" alt="icon" className='mb-3' width={20} height={20} />
              </span>

              <strong>Full Stack Developer</strong>

              <p>Building scalable, user-centric applications with strong back-end logic and intuitive front-end design</p>
            </div>

            {/* C++, docker, linux, container */}
            <div className='col-span-6 md:col-span-4 border-b border-r md:border-r border-white/20 p-8'>
              <span className='flex [&>*]:mr-3'>
                <Image src="/about-icons/linux.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/cplusplus.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/docker.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/python.png" alt="icon" className='mb-3' width={20} height={20} />
              </span>

              <strong>Systems Engineer</strong>

              <p>Architecting secure, reliable, and performant digital ecosystems with optimized tools and services.</p>

            </div>

            {/* js, ts, c#, */}
            <div className='col-span-12 md:col-span-4 border-b md:border-r-0 border-white/20 p-8'>
              <span className='flex [&>*]:mr-3'>
                <Image src="/about-icons/csharp.png" alt="icon" className='mb-3' width={20} height={20} />
                <Image src="/about-icons/typescript.png" alt="icon" className='mb-3' width={20} height={20} />
                {/* <Image src="/about-icons/white-icon.png" alt="icon" className='mb-3' width={20} height={20} /> */}
              </span>

              <strong>Software engineer</strong>
              <p>Developing usable, efficient, and scalable software solutions that prioritize user experience.</p>
            </div>
          </div>

          {/* Education and experience */}
          <div className='col-span-12 grid grid-cols-12 border-b  md:border-r border-white/20 p-8'>

            {/* School Logo */}
            <div className='col-span-2 p-8'>
              <Image src={"/white-icons/white-icon.png"} alt=''
                className='mx-auto my-auto' width={120} height={120} />
            </div>

            <div className='col-span-4 p-8'>
              <p className='flex justify-between'><span>B.Sc Computer Science</span><span>2021-2025</span></p>

              {/* specializations, background in geo */}
              <p>Specialization in Software engineering and theoretical computing</p>
              <p>with a background in mathematics (graphs, probability)</p>
              <p>and Geography (ArcGIS, mapping, satellite data)</p>
              3.9 GPA
            </div>

            <div className='col-span-4 [&>*]:mx-auto p-8'>
              <div>
                <Image src={"/white-icons/white-icon.png"} alt='' width={45} height={45} />
              </div>
              <div>
                1+ year of professional software experience
                <p>hireddd.com</p>
                <p>Trent Computer science Department</p>
                <p>Trent Careerspace</p>
              </div>
            </div>

            <div className='col-span-2 p-8 flex flex-wrap object-cover'>
              <Image src={"/about-icons/careerspace.png"} alt='' width={45} height={45} />
              <Image src={"/about-icons/hireddd.png"} alt='' width={45} height={45} />
              <Image className='bg-white' src={"/about-icons/cois.png"} alt='' width={45} height={45} />

            </div>

          </div>

          {/* Misc */}
          <div className='col-span-12 grid grid-cols-12 p-8'>

            <div className='col-span-3 p-8'>
              <Image src={"/canada-ontario.png"} alt='' width={100} height={100} />
            </div>

            <div className='col-span-3 p-8'>
              Based in Ontario
              Willing to relocate in Canada
              based in Mississauga, GTA
            </div>

            <div className='col-span-3 p-8'>
              Languages

              <div>
                English Fluent/Native
              </div>

              <div>
                French B1/B2 Proficiency
              </div>

            </div>

            <div className='col-span-3 p-8'>
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
        <h2>My Skills</h2>
        <p>In some order of proficiency</p>

        {/*+ or maybe make tree graphs somethings connect to multiple */}

        <div className=''>Language</div>


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
          <div> <h4>Web development</h4>

            <div>
              <Image src={"./about-icons/tailwind.png"} alt='tailwind' height={45} width={45}></Image>
              <p>Tilwind</p>
            </div>
            <div>
              <Image src={"./about-icons/react.png"} alt='' height={45} width={45}></Image>
              <p>React</p>
            </div>
            <div>
              <Image src={"./about-icons/nodejs.png"} alt='' height={45} width={45}></Image>
              <p>NodeJS</p>
            </div>
            <div>
              <Image src={"./about-icons/nextjs.png"} alt='' height={45} width={45}></Image>
              <p>NextJS</p>
            </div>
            <div>
              <Image src={"./about-icons/nextjs.png"} alt='' height={45} width={45}></Image>
              <p>ASP.NET</p>
            </div>
          </div>
          <p>Postgres, MongoDB, Electron, Express</p>
        </div>

        <div>
          <h3>Other Tools</h3>
          <p>Testing: Jest, Puppeteer, Playwright</p>
          <p>Cloud and DevOps: Github pages, Github actions, AWS</p>
        </div>
      </section>

      <section>
        <h2>Experiences</h2>

        <div>
          <h3>01 - web developer</h3>
          <p>school placement</p>
          <div>react, mongodb, express, js, nodejs, puppeteer</div>
        </div>

        <div>
          <h3>02 - Technical assisstant (co-op)</h3>
          <p>Worked with the school's careerspace department</p>
          <div>drupal, html, css, cdn, canva</div>
        </div>

        <div>
          <h3>03 - Grading assisstant (academic)</h3>
          <p>I was a grading assisstant for the Trent University Computer science department. Curating works of 100+ students across 3 term projects</p>
          <div>js, apis, typescript, html, css, tailwind</div> //the bubble-text thingy
        </div>


      </section>

      {/* <!-- Projects --> */}
      <section>
        <h2>Projects</h2>
        <div>File services --     redis, apis, asp.net, micorservices, docker</div> swe, sys, fstack
        <div>Monopoly console --  TUI, gameengine, </div> swe, sys
        <div>Portfolio --         Uses internationalisation, git hooks, github actions, nextjs, graphics </div> fstack
        <div>Browser extension -- extension, chrome apis</div> fstack
        <div>MyWorkday --         nativemessaging, extension, web scraping, </div> fstack, swe

        <div>compression</div>
        <div>graphics</div>
        <div>graphics maths lib</div>
        <div>Basalt</div>

      </section>

      <section>
        <h2>Projects</h2>
        <div className='flex flex-wrap flex-row'>
          <ProjectCard
            images={[]}
            heading='File Service'
            description='owjf wfiaw  awifojage rgrjioar gwaeiog eagroig earjog eagoi er'
            link=''
            tags={["nodejs", "microservice", "docker", "apis"]}
          />
          <ProjectCard
            images={["/extension.png"]} // extension
            heading='Browser-data extension'
            description='My browser extension'
            link=''
            tags={["extension", "chromeapis", "js"]}
          />
          <ProjectCard
            images={["/internet.png", "/extension.png"]} // webapp
            heading='Portfolio'
            description='My personal portfolio site hosted with github pages with intuitive and accessible design, also showcasing a clean user interface'
            link=''
            tags={["nextjs", "intl", "graphics", "typescript"]}
          />
        </div>
      </section>

      {/* <!-- References --> */}
      {/* <section>
        <h2>Endorsements</h2>
      </section> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-[#D1D5DB] p-6 rounded-[2rem] space-y-4">
            <h3 className="text-xl font-bold opacity-80">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-[#BFC3C9] rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
