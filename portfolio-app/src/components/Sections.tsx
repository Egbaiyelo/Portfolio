import { getTranslations } from 'next-intl/server';
import { Link } from "@/i18n/navigation";
import { IconType } from 'react-icons';
import { MdCode } from 'react-icons/md'
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si"

export interface ProjectProps {
    //   projectKey: string, // for intl

    icons: IconType[];
    link: string;
    heading: string;
    description: string;
    tags: string[];
    github: string;
}

export interface ExperienceProps {
    title: string;
    date?: string;
    jobType?: string;
    organization: string;
    description: string[];
    tools: string[];
}

type tech = Readonly<{ Icon: IconType, name: string, description?: string }>
interface TechStackProps {
    //   techStackKey: string, // for intl in future
    Icon: IconType;
    title: string;
    techs: tech[];

}

// ############################# Project Card ####################################
//#region ProjectCard

export async function ProjectCard({ icons, link, heading, description, tags, github }: ProjectProps) {

    // const t = await getTranslations('Projects');
        const safeId = heading.replace(/\s+/g, '-').toLowerCase();

    return (
        //r was rounded 2rem
        //r bg-[#202421]
        //r bg-white/[0.1] border border-white/10 text-black rounded-[1rem] p-8 flex flex-col gap-6 w-full
        <div className='bg-black backdrop-blur-md  w-full border border-white/10 rounded-2xl p-8 
            flex flex-col gap-6 transition-all duration-300 hover:border-yellow-400/50 hover:translate-y-[-4px] 
             hover:shadow-[0_0_30px_-10px_rgba(250,204,21,0.3)]' aria-labelledby={safeId}>

            {/* image - extension, game, webapp etc */}
            <div className='flex justify-between items-start'>

                {/* //r was rounded 2xl  */}
                {/* //r bg-[#BFC3C9] p-3 rounded-xl flex space-x-4 */}
                <div className='p-2 rounded-lg bg-gray-800/50 border border-white/10 flex space-x-4'>

                    {icons && icons.length > 0 ? (icons.map((Icon, index) => (
                        <Icon
                            key={index}
                            className='text-white/70'
                            title='project-icon'
                            size={32}
                        // default here too
                        // onError={(e) => e.currentTarget.src = "/white-icons/white-icon.png"}
                        />
                    ))
                    ) : (
                        // default down here (a project icon) and up there too
                        <MdCode
                            title='code-icon'
                            size={32}
                        />
                    )}

                </div>

                {/* Link to repo (if any) */}
                {link && (
                    <div className='p-2 rounded-full cursor-pointer hover:bg-gray-400 transition'>
                        <a href={link} target="_blank" rel='noopener noreferrer' className='ml-auto text-white/40 hover:text-white transition'><FaExternalLinkAlt title='open-link.png' size={25} /></a>
                    </div>
                )}
            </div>

            {/* Heading and description */}
            <div className='space-y-3'>
                {/* Heading */}
                <h3 id={safeId} className='text-2xl font-bold leading-tight tracking-tight text-yellow-400/90 capitalize'>{heading}</h3>

                {/* explain */}
                <p className='text-white/80 leading-relaxed text-base'>{description}</p>
            </div>

            {/* tools used */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-4 py-1 bg-white/20 text-sm font-medium rounded-full hover:bg-gray-800 transition-colors border border-white/10 text-white/90"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Learn more */}
            {/* //r  relative py-4 bg-[#BFC3C9]/70 hover:bg-[#A8ADB5] text-[#374151]  rounded-full transition-all duration-300 ease-in-out mt-auto flex items-center justify-center gap-3 overflow-hidden hover:shadow-lg active:scale-95 cursor-pointer    */}
            <a href={github} className="group w-full py-2.5 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors mt-auto">
                <SiGithub size={30} className="transition-transform duration-300 group-hover:rotate-15" />
                <p className='tracking-wide'>GitHub</p>
            </a>
        </div>
    )
}

//#endregion



// ############################# Experience Items ####################################
//#region ExperienceItems

export async function ExperienceItem({ title, date, organization, jobType, description, tools }: ExperienceProps) {
    const safeId = title.replace(/\s+/g, '-').toLowerCase();

    return (
        <article className="space-y-8 border-l-2 border-gray-700 ml-4 pl-8 pb-7" aria-labelledby={`${safeId}`}>

            <div className="relative">
                {/* The Dot on the timeline */}
                <div aria-hidden="true" className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-yellow-400 border-4 border-gray-900" />

                <div className="flex flex-col md:flex-row md:justify-between mb-2 max-w-150">
                    <h3 id={`${safeId}`} className="text-xl font-bold text-gray-100 capitalize">{title}</h3>
                    <span className="text-yellow-400 font-mono text-sm whitespace-nowrap">{date}</span>
                </div>

                <p className="text-gray-400 font-medium mb-3 capitalize">{organization}{jobType && ` • ${jobType}`}</p>

                <ul className="list-disc list-outside ml-4 text-gray-300 space-y-2 text-sm max-w-150" role="list">
                    {
                        description?.map((desc, index) => (
                            <li key={index} className=''>{desc}</li>
                        ))
                    }
                    {/* <li>Developed responsive web applications using React and Tailwind CSS.</li>
                    <li>Optimized performance resulting in a 40% faster load time.</li>
                    <li>Led a team of 4 developers to ship a new dashboard product.</li> */}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4" aria-label="Technologies used">
                    {tools?.map((tool) => (
                        <span key={tool} className="px-2 py-0.5 text-xs border border-gray-700 text-yellow-400 bg-gray-800/50 rounded">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}

//#endregion



// ############################# Tech Skill Container ####################################
//#region TechSkills

/// A techskill container element
export function TechSkill({ Icon, title, techs }: TechStackProps) {
    const TitleIon = Icon ?? MdCode;

    return (
        <section className="mx-7 my-2 p-8 flex flex-col rounded-sm bg-[#202421] border border-gray-800 w-[80%]" aria-labelledby={`${title}-heading`}>

            {/* Heading */}
            <div className="font-bold flex items-center gap-2">
                <TitleIon title={`${title}-icon`} size={40} />
                <h3 id={`${title}-heading`} className="capitalize text-xl my-auto ml-2">{title}</h3>
                <div className="mt-3 mb-4 h-2px bg-white/10" />
            </div>

            {/* tech list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 mt-4">
                {
                    techs.map(tech => {
                        const TechIcon = tech.Icon ?? MdCode;

                        return (
                            <div key={tech.name} className="group
                             flex items-center gap-2 transition-all duration-200 ease-out text-gray-200 hover:scale-[1.03]"
                                aria-label={`${tech.name}: ${tech.description ?? "Technology skill"}`}>
                                <TechIcon title={`${tech.name} logo`} size={35} className='group-hover:text-yellow-400' />
                                <div className="leading-tight my-auto">
                                    <span className="capitalize font-semibold text-sm group-hover:text-yellow-400">{tech.name}</span>
                                    {/* <div className="text-xs text-gray-400">{tech.description}</div> */}
                                    {tech.description && (
                                        <div className="text-xs text-gray-400 group-hover:text-gray-200">{tech.description}</div>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

//#endregion