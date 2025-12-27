import { getTranslations } from 'next-intl/server';
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface ProjectProps {
    //   projectKey: string, // for intl

    images: string[];
    link: string;
    heading: string;
    description: string;
    tags: string[];
}

export default async function ProjectCard({ images, link, heading, description, tags }: ProjectProps) {

    // how to do translation? all projects or each with specific one
    const t = await getTranslations('Projects');

    return (
        <div className='bg-[#D1D5DB] text-black rounded-[2rem] p-8 flex flex-col gap-6 max-w-sm'>

            {/* image - extension, game, webapp etc */}
            <div className='flex justify-between items-start'>

                <div className='bg-[#BFC3C9] p-3 rounded-2xl flex space-x-4'>
                    {images.map((imageSrc) => (
                        <Image className='object-cover' src={imageSrc} alt='project-icon' width={32} height={32} />
                    ))}
                    {/* <Image src={"/white-icons/white-icon.png"} alt='' width={32} height={32} /> */}
                </div>

                {/* Link to repo (if any) */}
                {link && (
                    <div className='p-2 rounded-full cursor-pointer hover:bg-gray-400 transition'>
                        <a href={link} target="_blank" rel='noopener noreferrer'><Image src={"/open-link.png"} alt='' width={25} height={25} /></a>
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
            <button className="w-full py-4 bg-[#BFC3C9] hover:bg-[#A8ADB5] text-[#374151] font-semibold rounded-full transition-all duration-200 mt-auto">
                Learn more
            </button>
        </div>
    )
}