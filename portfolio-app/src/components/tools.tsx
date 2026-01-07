import { IconType } from 'react-icons';
import { MdCode } from 'react-icons/md'

type tech = { Icon: IconType, name: string, description?: string }
interface TechStackProps {
    //   techStackKey: string, // for intl in future
    Icon: IconType;
    title: string;
    techs: tech[];
}

/// A techskill container element
export default function TechSkill({ Icon, title, techs }: TechStackProps) {
    console.log('main icon', Icon)
    const TitleIon = Icon ?? MdCode;

    return (
        <section className="mx-7 my-2 p-5 flex flex-col rounded-sm bg-[#202421]" aria-labelledby={`${title}-heading`}>

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
                            <div key={tech.name} className="flex items-center gap-2 transition-colors duration-200 hover:bg-white/25" aria-label={`${tech.name}: ${tech.description ?? "Technology skill"}`}>
                                <TechIcon title={`${tech.name} logo`} size={35} />
                                <div className="leading-tight my-auto">
                                    <span className="font-semibold text-sm">{tech.name}</span>
                                    {/* <div className="text-xs text-gray-400">{tech.description}</div> */}
                                    {tech.description && (
                                        <div className="text-xs text-gray-400">{tech.description}</div>
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