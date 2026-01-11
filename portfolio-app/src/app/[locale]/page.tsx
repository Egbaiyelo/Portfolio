import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from "next/image";

export const dynamic = 'force-static';
// export const revalidate = false;

import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { ExperienceItem, ProjectCard } from '@/components/Sections';
import TechSkill from '@/components/tools';

import {
  SiTypescript, SiJavascript, SiCplusplus, SiOpenjdk, SiPython,
  SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiDotnet, SiPostgresql,
  SiMongodb, SiExpress, SiJest, SiPuppeteer, SiAmazonwebservices,
  SiGithubactions, SiGithub, SiWebassembly,
  SiDocker
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { MdCode, MdWeb, MdBugReport, MdCloudQueue, MdAddLocationAlt, MdLocationDisabled } from 'react-icons/md';
import { FaGitAlt } from "react-icons/fa6";
import { FaDocker, FaLinux, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";
import { IoExtensionPuzzle, IoLanguage, IoGameController } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { SectionHeading } from '@/components/header';
// import CanadaMap from './canadaMap';
import TrentLogo from '../../components/svgs/TrentLogo';
// import CanadaMap from '../../components/svgs/CanadaMap';
// import { title } from 'process';

// maybe move all lists to json file or so

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

  const experiences = [
    {
      title: "Grading assisstant",
      organization: 'Trent University',
      description: 'I was a grading assisstant for the Trent University Computer science department. Curating works of 100+ students across 3 term projects',
      tools: ['js', 'apis', 'typescript', 'html', 'css', 'tailwind'],
    },
    {
      title: "Technical assisstant (co-op)",
      organization: "Trent University Careerspace",
      description: "Worked with the school's careerspace department",
      tools: ['drupal', 'html', 'css', 'cdn', 'canva'],
    },
    {
      title: "Web developer",
      organization: 'Hireddd.com',
      description: "School placement",
      tools: ['react', 'mongodb', 'express', 'js', 'nodejs', 'puppeteer']
    }
  ]

  return (
    <>
      <Nav />
      <div className='ml-20'>
        {/* maybe number them
        1 about me (full stack & systems), based, school, fav lang, years exp, langs
        2 tech 
        3 experience
        4 projects
        5 contact */}


        {/* <!-- Each section has link to it and a link to its more detailed page --> */}
        {/* <!-- About me --> */}


        <section className='text-white border-white/10 pt-12 m-4'>
          <SectionHeading heading='About me Board' />

          {/* About me Container */}
          <div className='grid grid-cols-12 w-full gap-0 border border-white/10 rounded-xl overflow-hidden grid-flow-row-dense'>

            {/* Row 1: Proficiencies */}
            {/* Top-Block 1: Full Stack */}
            {/* //r they had col-span-6 md:col-span-4 */}
            <div className='col-span-6 md:col-span-4 group p-8 border-b md:border-r border-white/10 hover:bg-white/5 transition-colors'>
              <div className='flex gap-3 mb-4 text-gray-400 group-hover:!text-yellow-400 transition-colors'>
                <SiReact title='react-icon' size={20} />
                <SiNodedotjs title='nodejs-icon' size={20} />
                <SiTailwindcss title='tailwindcss-icon' size={20} />
                <SiDotnet title='dotnet-icon' size={20} />
                <SiJavascript title='js-icon' size={20} />
              </div>
              <h3 className='font-bold text-lg mb-2'>Full Stack Developer</h3>
              <p className='text-sm text-gray-400 leading-relaxed'>Building scalable, user-centric applications with strong back-end logic and intuitive front-end design</p>
            </div>

            {/* Top-Block 2: Systems */}
            {/* //+ add container */}
            <div className='col-span-6 md:col-span-4 group p-8 border-b md:border-r border-white/10 hover:bg-white/5 transition-colors'>
              <div className='flex gap-3 mb-4 text-gray-400 group-hover:text-blue-400 transition-colors'>
                <FaLinux title='linux-icon' size={20} />
                <SiCplusplus title='cpp-icon' size={20} />
                <SiDocker title='docker-icon' size={20} />
                <SiPython title='python-icon' size={20} />
              </div>
              <h3 className='font-bold text-lg mb-2'>Systems Engineer</h3>
              <p className='text-sm text-gray-400 leading-relaxed'>Architecting secure, reliable, and performant digital ecosystems with optimized tools and services.</p>
            </div>

            {/* Top-Block 3: Software engineering */}
            {/* //+ add js */}
            <div className='col-span-6 md:col-span-4 group p-8 border-b md:border-r-0 border-white/10 hover:bg-white/5 transition-colors'>
              <div className='flex gap-3 mb-4 text-gray-400 group-hover:text-yellow-400 transition-colors'>
                <TbBrandCSharp title='csharp-brand' size={20} />
                <SiTypescript title='typescript-icon' size={20} />
              </div>
              <h3 className='font-bold text-lg mb-2'>Software engineer</h3>
              <p className='text-sm text-gray-400 leading-relaxed'>Developing usable, efficient, and scalable software solutions that prioritize user experience.</p>
            </div>


            {/* Row 2 : Education and experience */}
            <div className='col-span-2 md:col-span-6 p-8 flex border-r border-b border-white/10 gap-8 items-center bg-white/[0.02]'>

              {/* School Logo */}
              <div className='col-span-2 p-8'>
                <TrentLogo size={120} />
                {/* <Image src={"/white-icons/white-icon.png"} alt='school' */}
                {/* className=' opacity-80' width={120} height={120} /> */}
              </div>

              {/* //+! increase text size */}
              <div className='col-span-4 p-8'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-bold text-yellow-400'>B.Sc Computer Science</span>
                  <span className='text-xs font-mono text-gray-200'>2021-2025</span>
                </div>

                {/* specializations, background in geo */}
                <p className='text-sm text-gray-300'>Specialization in Software engineering and theoretical computing</p>
                {/* <p className='text-sm text-gray-300'>with a background in mathematics (graphs, probability)</p> */}
                {/* <p className='text-sm text-gray-300'>and Geography (ArcGIS, mapping, satellite data)</p> */}
                <div className='mt-2 inline-block px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded'>3.9 GPA</div>
                {/* <div className='mt-2 inline-block px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded'>Presidents honour roll</div> */}
              </div>
            </div>

            {/* Misc (1/2) */}

            <div className='col-span-2 p-8 border-b border-r border-white/10 items-center'>
              {/* //+ add location pin there */}
              <MdAddLocationAlt size={70} className='my-3 mx-auto' />
              <h4 className='text-xs font-bold uppercase text-gray-300 mb-2'>Location</h4>
              <p className=''>Based in <strong>Mississauga</strong>, Greater Toronto Area</p>
              <p className='text-xs text-yellow-400/80 mt-1'>Willing to relocate in Canada</p>
            </div>

            <div className='col-span-4 p-8 row-span-2 flex items-center justify-center'>
              {/* <CanadaMap size={400} className='mx-auto my-auto'/> */}
              <Image src={"/canada-ontario.png"} alt='Map of Canada highlighting Ontario' width={400} height={400} className='object-contain' />
            </div>

            {/* //+ make it checkered but visually pleasing as in some tile background lighter than others */}
            {/* //+ each tile should link to relevant sections */}

            <div className='flex col-span-6 border-r border-white/10 p-8 group transition-all duration-300'>
              <div className='flex flex-col gap-4 w-full'>
                <div className=''>

                  <p className='text-lg mb-3 font-bold'>
                    <span className='flex items-center gap-3 mb-1 transition-colors duration-300 group-hover:text-[#FFD700]'>
                      <FaBriefcase size={40} />
                      <span className='block tracking-tighter text-4xl font-bold'>1+ years</span>
                    </span>

                    Professional software experiences
                  </p>

                  <ul className='text-base space-y-1'>
                    <li>hireddd.com</li>
                    <li>Trent Computer science Department</li>
                    <li>Trent Careerspace</li>
                  </ul>
                </div>
              </div>

              <div className='flex items-center gap-6 object-cover flex-wrap md:flex-row md:flex-nowrap'>
                <Image src={"/about-icons/careerspace.png"} alt='' width={85} height={85} className='shrink-0 rounded-md' />
                <Image src={"/about-icons/hireddd.png"} alt='' width={85} height={85} className='shrink-0 rounded-md' />
                <Image src={"/about-icons/cois.png"} alt='Trent Computer science department' width={85} height={85} className='bg-white shrink-0 rounded-md ' />
              </div>

            </div>

            {/* //+ when small screen turn proficiencies into a list without any descriptions, just icons atop */}
            <div className='col-span-2 p-8 border-r border-white/10'>
              <IoLanguage size={75} className='my-3 mx-auto' />
              <h4 className='text-xs font-bold uppercase text-gray-300 mb-2'>Languages</h4>

              <div className='text-sm flex gap-4'>
                <span>English <span className='text-gray-500'>(Native)</span></span>
                <span>French <span className='text-gray-500'>(B1/B2)</span></span>
              </div>

            </div>

            {/* <div className='col-span-3 p-8'>
              Key languages
              C#, C++, JS, TS
            </div> */}

            {/* //+ add sql */}

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

        {/* Projects section */}
        <section>
          <SectionHeading heading='Projects' />
          {/* <h2 className=''>Projects</h2> */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              projects.map(project => (
                <div key={project.heading} className='flex h-full'>
                  <ProjectCard {...project} />
                </div>
              ))
            }
          </div>
        </section>

        <section>
          <SectionHeading heading='Experiences' />
          <div>
            {
              experiences.map((experience, expIndex) => (
                <ExperienceItem key={expIndex} {...experience} />
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
          <SectionHeading heading='Technical Skills' />
          <div className=''>
            {
              skillGroups.map(skill => (
                <TechSkill key={skill.title} {...skill} />
              ))
            }
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
