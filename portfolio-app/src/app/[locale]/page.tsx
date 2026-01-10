import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from "next/image";

export const dynamic = 'force-static';
// export const revalidate = false;

import Nav from '@/components/nav';
import Footer from '@/components/footer';
import ProjectCard from '@/components/projectCard';
import TechSkill from '@/components/tools';

import {
  SiTypescript, SiJavascript, SiCplusplus, SiOpenjdk, SiPython,
  SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiDotnet, SiPostgresql,
  SiMongodb, SiExpress, SiJest, SiPuppeteer, SiAmazonwebservices,
  SiGithubactions, SiGithub, SiWebassembly,
  SiDocker
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { MdCode, MdWeb, MdBugReport, MdCloudQueue } from 'react-icons/md';
import { FaGitAlt } from "react-icons/fa6";
import { FaDocker, FaLinux, FaExternalLinkAlt } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";



export default async function Home({
  params
}: {
  params: { locale: string };
}) {

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Homepage');

  const skillGroups = [
    {
      title: "Languages", Icon: MdCode, techs: [
        { name: "Typescript", Icon: SiTypescript, description: "Typed JS" },
        { name: "Javascript", Icon: SiJavascript, description: "Frontend & NodeJS" },
        { name: "C++", Icon: SiCplusplus, description: "Systems, graphics" },
        { name: "C#", Icon: TbBrandCSharp, description: "Main, OOP & .NET" },
        { name: "Java", Icon: SiOpenjdk, description: "OOP, Backend & cross-platform" },
        { name: "Python", Icon: SiPython, description: "Scripting, automation & data processing" }]
      // rust and go intermediate 
    },
    {
      title: "Web development", Icon: MdWeb, techs: [
        { name: "Tailwind", Icon: SiTailwindcss, description: "Utility CSS" },
        { name: "React", Icon: SiReact, description: "Component-based Frontend" },
        { name: "NextJS", Icon: SiNextdotjs, description: "React & SSR" },
        { name: "NodeJS", Icon: SiNodedotjs, description: "JS Backend" },
        { name: "ASP.NET", Icon: SiDotnet, description: "Backend, .NET & APIs" },
        { name: "Postgres", Icon: SiPostgresql, description: "Relational DB" },
        { name: "MongoDB", Icon: SiMongodb, description: "NoSQL DB" },
        { name: "Express", Icon: SiExpress, description: "Rest APIs" },
        { name: "WebAssembly", Icon: SiWebassembly, description: "High-performance web" }]
    },
    // Testing and tooling
    {
      title: "Testing", Icon: MdBugReport, techs: [
        { name: "Jest", Icon: SiJest, description: "JS testing" },
        { name: "Puppeteer", Icon: SiPuppeteer, description: "Browser automation" },
        //+ find the icon
        { name: "Playwright", Icon: MdCode, description: "Cross-browser testing" }]
      // Soon mstest, junit
    },
    {
      title: "Cloud and devops", Icon: MdCloudQueue, techs: [
        { name: "AWS", Icon: SiAmazonwebservices, description: "IAM, Lambda, EC2..." },
        { name: "Docker", Icon: FaDocker, description: "Containerization" },
        { name: "Github actions", Icon: SiGithubactions, description: "CI/CD, testing & deployment" },
        { name: "Git", Icon: FaGitAlt, description: "Version control" }]
      // Soon terraform
    }
  ];

  const projects = [
    {
      icons: [],
      heading: 'File Service',
      description: 'owjf wfiaw  awifojage rgrjioar gwaeiog eagroig earjog eagoi er',
      link: 'uwfe',
      tags: ["nodejs", "microservice", "docker", "apis"]
    },
    {
      icons: [IoExtensionPuzzle],  //extension
      heading: 'Browser-data extension',
      description: 'My Browser data extension',
      link: '',
      tags: ["extension", "chromeapis", "js"]
    },
    {
      icons: [IoExtensionPuzzle, BsGlobe2],  //webapp
      heading: 'Portfolio',
      description: 'My personal portfolio site hosted with github pages with intuitive and accessible design, also showcasing a clean user interface',
      link: '',
      tags: ["nextjs", "intl", "graphics", "typescript"]
    }
  ]

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
              <span className='flex [&>*]:mr-3 mb-3'>
                <SiReact title='react-icon' size={20}/>
                <SiNodedotjs title='nodejs-icon' size={20}/>
                <SiTailwindcss title='tailwindcss-icon' size={20}/>
                <SiDotnet title='dotnet-icon' size={20}/>
                <SiJavascript title='js-icon' size={20} className='text-yellow-300'/>
              </span>

              <strong>Full Stack Developer</strong>

              <p>Building scalable, user-centric applications with strong back-end logic and intuitive front-end design</p>
            </div>

            {/* C++, docker, linux, container */}
            <div className='col-span-6 md:col-span-4 border-b border-r md:border-r border-white/20 p-8'>
              <span className='flex [&>*]:mr-3 mb-3'>
                <FaLinux title='linux-icon' size={20}/>
                <SiCplusplus title='cpp-icon' size={20}/>
                <SiDocker title='docker-icon' size={20}/>
                <SiPython title='python-icon' size={20}/>
              </span>

              <strong>Systems Engineer</strong>

              <p>Architecting secure, reliable, and performant digital ecosystems with optimized tools and services.</p>

            </div>

            {/* js, ts, c#, */}
            <div className='col-span-12 md:col-span-4 border-b md:border-r-0 border-white/20 p-8'>
              <span className='flex [&>*]:mr-3 mb-3'>
                <TbBrandCSharp title='csharp-brand' size={20}/>
                <SiTypescript title='typescript-icon' size={20}/>
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

      {/* Projects section */}
      <section>
        <h2 className=''>Projects</h2>
        <div className='flex flex-wrap flex-row space-x-4 space-y-4'>
          {
            projects.map(project => (
              <ProjectCard key={project.heading} {...project} />
            ))
          }
        </div>
      </section>

      {/* <!-- References --> */}
      {/* <section>
        <h2>Endorsements</h2>
      </section> */}

      {/* Technical skills */}
      <section>
        <h2>Technical Skills</h2>
        {
          skillGroups.map(skill => (
            <TechSkill key={skill.title} {...skill} />
          ))
        }
      </section>
      {/* <TechSkill image='./extension.png' title='Web dev' techs={[{image: "./discord.png", name: "discord", "description": "uwfwefw wufow fwo"},{image: "./discord.png", name: "discord", "description": "uwfwefw wufow fwo"}, {image: "./discord.png", name: "discord", "description": "uwfwefw wufow fwo"}, {image: "./discord.png", name: "discord", "description": "uwfwefw wufow fwo"}]}/> */}

      <Footer />
    </div>
  );
}
