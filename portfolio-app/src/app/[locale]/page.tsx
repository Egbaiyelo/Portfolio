import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from "next/image";

export const dynamic = 'force-static';
// export const revalidate = false;

import Nav from '@/components/nav';
import { SectionHeading, Footer } from '@/components/composition';
import { ExperienceItem, ExperienceProps, ProjectCard, ProjectProps, TechSkill } from '@/components/Sections';

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
import TrentLogo from '../../components/svgs/TrentLogo';
import { SiGraphql } from "react-icons/si";
import { PiGraphicsCard } from "react-icons/pi";
import { getPath } from '../../../utils/path';

// import { title } from 'process';

//+ maybe move all lists to json file or so

export default async function Home({
  params
}: {
  params: { locale: string };
}) {

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('homepage');
  const tAMB = await getTranslations('about-me-board');
  const ambRoles = tAMB.raw('hero.roles');
  const ambstats = tAMB.raw('hero.stats');

  const tExp = await getTranslations('experiences');
  const experiencesArray = tExp.raw('list') as ExperienceProps[];

  const tProj = await getTranslations('projects');
  const projectsArray = tProj.raw('list') as { heading: string, description: string }[];

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

  const project_config = [
    {
      id: 0, icons: [], link: '',
      tags: ["nodejs", "microservice", "docker", "apis", "react", "ASP.NET"],
      github: 'https://github.com/egbaiyelo'
    },
    {
      id: 1, icons: [IoExtensionPuzzle], link: '',
      tags: ["extension", "chromeapis", "js"],
      github: 'https://github.com/egbaiyelo/Browser-data-extensions'
    },
    {
      id: 2, icons: [IoExtensionPuzzle, BsGlobe2], link: '',
      tags: ["nextjs", "intl", "graphics", "typescript"],
      github: 'https://github.com/egbaiyelo/Portfolio'
    },
    {
      id: 3, icons: [IoGameController], link: '',
      tags: ["c#", "api", "json", "TUI"],
      github: 'https://github.com/egbaiyelo/MonopolyConsole'
    },
    {
      id: 4, icons: [SiGraphql, PiGraphicsCard], link: '',
      tags: ["javaScript", 'typescript', 'wasm', 'graphics', 'GLSL'],
      github: 'https://github.com/egbaiyelo/Terrain-Project'
    },
  ];



  return (
    <>
      <Nav />
      <div className='ml-5 md:ml-20'>
        {/* maybe number them
        1 about me (full stack & systems), based, school, fav lang, years exp, langs
        2 tech 
        3 experience
        4 projects
        5 contact */}


        {/* <!-- Each section has link to it and a link to its more detailed page --> */}
        {/* <!-- About me --> */}


        <section className='text-white border-white/10 pt-12'>
          <SectionHeading heading={tAMB('heading')} />

          {/* About me Container */}
          <div className='m-4 grid grid-cols-12 gap-0 border border-white/10 rounded-xl overflow-hidden grid-flow-row-dense'>

            {/* Row 1: Proficiencies */}
            {/* Top-Block 1: Full Stack */}
            {/* //r they had col-span-6 md:col-span-4 */}
            <div className=' col-span-12 md:col-span-4 group pt-8 px-8 md:p-8 md:border-b md:border-r border-white/10 hover:bg-white/5 transition-colors'>
              <div className='flex gap-3 mb-4 text-gray-400 group-hover:!text-yellow-400 transition-colors'>
                <SiReact title='react-icon' size={20} />
                <SiNodedotjs title='nodejs-icon' size={20} />
                <SiTailwindcss title='tailwindcss-icon' size={20} />
                <SiDotnet title='dotnet-icon' size={20} />
                <SiJavascript title='js-icon' size={20} />
              </div>
              <h3 className='font-bold text-lg mb-2'>{ambRoles.fullStack.title}</h3>
              <p className='hidden lg:block text-sm text-gray-400 leading-relaxed'>{ambRoles.fullStack.desc}</p>
            </div>

            {/* Top-Block 2: Systems */}
            {/* //+ add container icon */}
            <div className=' md:justify-between col-span-12 md:col-span-4 group pt-2 px-8 md:p-8 md:border-b md:border-r border-white/10 hover:bg-white/5 transition-colors '>
              <div className='flex gap-3 mb-4 text-gray-400 group-hover:text-blue-400 transition-colors'>
                <FaLinux title='linux-icon' size={20} />
                <SiCplusplus title='cpp-icon' size={20} />
                <SiDocker title='docker-icon' size={20} />
                <SiPython title='python-icon' size={20} />
              </div>
              <h3 className='font-bold text-lg mb-2'>{ambRoles.systems.title}</h3>
              <p className='hidden lg:block text-sm text-gray-400 leading-relaxed'>{ambRoles.systems.desc}</p>
            </div>

            {/* Top-Block 3: Software engineering */}
            {/* //+ merge location and canada, it becomes github contributions, github removes when canada map goes and small location takes over */}
            <div className='col-span-12 md:col-span-4 group pt-2 px-8 pb-2 md:p-8 border-b md:border-r-0 border-white/10 hover:bg-white/5 transition-colors'>
              <div className='flex gap-3 mb-4 text-gray-400 group-hover:text-yellow-400 transition-colors'>
                <TbBrandCSharp title='csharp-brand' size={20} />
                <SiTypescript title='typescript-icon' size={20} />
                <SiJavascript title='javascript-icon' size={20} />
              </div>
              <h3 className='font-bold text-lg mb-2'>{ambRoles.software.title}</h3>
              <p className='hidden lg:block text-sm text-gray-400 leading-relaxed'>{ambRoles.software.desc}</p>
            </div>


            {/* Row 2 : Education and experience */}
            <div className='col-span-12 md:col-span-9 xl:col-span-6 p-8 flex border-r border-b border-white/10 gap-8 items-center bg-white/[0.02]'>

              {/* School Logo */}
              <div className='col-span-2 p-8'>
                <TrentLogo size={120} />
                {/* <Image src={"/white-icons/white-icon.png"} alt='school' */}
                {/* className=' opacity-80' width={120} height={120} /> */}
              </div>

              <div className='col-span-4 p-8'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-bold text-yellow-400'>{ambstats.degree}</span>
                  <span className='text-xs font-mono text-gray-200'>{ambstats.years}</span>
                </div>

                {/* specializations, background in geo */}
                <p className='text-gray-300 mb-2 font-bold'>{ambstats.university}</p>
                <p className='text-base text-gray-300 mb-2'>{ambstats.specialization}</p>
                {/* <p className='text-sm text-gray-300'>with a background in mathematics (graphs, probability)</p> */}
                {/* <p className='text-sm text-gray-300'>and Geography (ArcGIS, mapping, satellite data)</p> */}
                <div className='mt-2 inline-block px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded'>{ambstats.gpa}</div>
                {/* <div className='mt-2 inline-block px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded'>Presidents honour roll</div> */}
              </div>
            </div>

            {/* Misc (1/2) */}

            {/* Location Box */}
            <div className='col-span-6 md:col-span-3 xl:col-span-2 p-8 border-b border-r border-white/10 items-center'>
              <MdAddLocationAlt size={70} className='my-3 mx-auto' />
              <h4 className='text-xs font-bold uppercase text-gray-300 mb-2'>Location</h4>
              <p className=''>{tAMB.rich('hero.stats.location', { bold: (chunks) => <strong>{chunks}</strong> })}</p>
              <p className='text-xs text-yellow-400/80 mt-1'>{ambstats.relocate}</p>
            </div>

            {/* CanadaMap Box */}
            <div className='hidden xl:flex col-span-4 p-8 row-span-2 flex items-center justify-center bg-white/[0.02]'>
              {/* <CanadaMap size={400} className='mx-auto my-auto'/> */}
              <Image src={getPath("/canada-ontario.png")} alt='Map of Canada highlighting Ontario' width={400} height={400} className='object-contain' />
            </div>

            {/* //+ make it checkered but visually pleasing as in some tile background lighter than others */}
            {/* //+ each tile should link to relevant sections */}

            {/* Experiences Box */}
            <div className='flex col-span-12 md:col-span-9 xl:col-span-6 border-r border-white/10 p-8 group transition-all duration-300'>
              <div className='flex flex-col gap-4 w-full'>
                <div className=''>

                  <p className='text-lg mb-3 font-bold'>
                    <span className='flex items-center gap-3 mb-1 transition-colors duration-300 group-hover:text-[#FFD700]'>
                      <FaBriefcase size={40} />
                      <span className='block tracking-tighter text-4xl font-bold'>{ambstats.expYears}</span>
                    </span>

                    {ambstats.expText}
                  </p>

                  <ul className='text-base space-y-1'>
                    <li>hireddd.com</li>
                    <li>Trent Computer science Department</li>
                    <li>Trent Careerspace</li>
                  </ul>
                </div>
              </div>

              <div className='flex flex-col md:flex-row items-center gap-6 flex-wrap justify-center '>
                <Image src={getPath("/about-icons/careerspace.png")} alt='careerspace' width={85} height={85} className='shrink-0 rounded-md' />
                <Image src={getPath("/about-icons/hireddd.png")} alt='hireddd.com' width={85} height={85} className='shrink-0 rounded-md' />
                <Image src={getPath("/about-icons/cois.png")} alt='Trent Computer science department' width={85} height={85} className='bg-white shrink-0 rounded-md ' />
              </div>

            </div>

            {/* //+ when small screen turn proficiencies into a list without any descriptions, just icons atop */}
            {/* Languages Box */}
            <div className='col-span-6 md:col-span-3 xl:col-span-2 p-8 border-b border-r border-white/10'>
              <IoLanguage size={75} className='my-3 mx-auto' />
              <h4 className='text-xs font-bold uppercase text-gray-300 mb-2'>{ambstats.languages}</h4>

              <div className='text-sm flex gap-4'>
                <span>English <span className='text-gray-500'>{`(${ambstats.native})`}</span></span>
                <span>Français <span className='text-gray-500'>(B1/B2)</span></span>
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
          <SectionHeading heading={tProj('heading')} />
          {/* <h2 className=''>Projects</h2> */}
          {/* <p>Project list to highlight my range</p> */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4'>
            {
              project_config.map((project, index) => {
                // console.log({ "project": projectsArray, "config": project }); 
                return (
                  <div key={projectsArray[index].heading} className='flex h-full'>
                    <ProjectCard {...project} {...projectsArray[index]} />
                  </div>
                )
              })
            }
          </div>
        </section>

        <section>
          <SectionHeading heading={tExp('heading')} />
          <div>
            {
              experiencesArray.map((experience, expIndex) => (
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
          <SectionHeading heading={t('technical-skills')} />
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
