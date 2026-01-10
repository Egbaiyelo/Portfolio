import { getTranslations } from 'next-intl/server';
import { Link } from "@/i18n/navigation";
import { IconType } from 'react-icons';
import { MdCode } from 'react-icons/md'
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si"


interface ProjectProps {
    //   projectKey: string, // for intl

    icons: IconType[];
    link: string;
    heading: string;
    description: string;
    tags: string[];
}

export default async function ProjectCard({ icons, link, heading, description, tags }: ProjectProps) {

    // how to do translation? all projects or each with specific one
    const t = await getTranslations('Projects');

    return (
        <div className='bg-[#D1D5DB] text-black rounded-[2rem] p-8 flex flex-col gap-6 max-w-sm'>

            {/* image - extension, game, webapp etc */}
            <div className='flex justify-between items-start'>

                <div className='bg-[#BFC3C9] p-3 rounded-2xl flex space-x-4'>

                    {icons && icons.length > 0 ? (icons.map((Icon, index) => (
                        <Icon
                            key={index}
                            className='object-cover'
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
                        <a href={link} target="_blank" rel='noopener noreferrer'><FaExternalLinkAlt title='open-link.png' size={25} /></a>
                    </div>
                )}
            </div>

            {/* Heading and description */}
            <div className='space-y-3'>
                {/* Heading */}
                <div className='text-3xl font-bold leading-tight tracking-tight'>{heading}</div>

                {/* explain */}
                <p className='text-[#4B5563] leading-relaxed text-lg'>{description}</p>
            </div>

            {/* tools used */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-4 py-1 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Learn more */}
            <button className="group relative w-full py-4 bg-[#BFC3C9] hover:bg-[#A8ADB5] text-[#374151] font-bold rounded-full transition-all duration-300 ease-in-out mt-auto  flex items-center justify-center gap-3 overflow-hidden hover:shadow-lg active:scale-95">
                <SiGithub size={30} className="transition-transform duration-300 group-hover:rotate-12" />
                <p className='tracking-wide'>GitHub</p>
            </button>
        </div>
    )
}