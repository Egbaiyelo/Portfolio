import Image from "next/image";


type tech = { image: string, name: string, description?: string }
interface TechStackProps {
    //   techStackKey: string, // for intl in future
    image: string;
    heading: string;
    techs: tech[];
}

export default function TechStack({ image, heading, techs }: TechStackProps) {
    return (
        <section className="ml-3 p-4 flex flex-col rounded-sm bg-[#202421]">
            <div className="font-bold flex items-center gap-2">
                <Image src={image} alt={heading} width={40} height={40}/>
                <h2 className="capitalize text-xl my-auto ml-2">{heading}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 mt-4">
                {
                    techs.map((tech, techIndex) => (
                        <div className="flex items-center gap-2">
                            <Image src={tech.image} alt={tech.name} width={40} height={40} className="mt-1 my-auto"/>
                            <div className="leading-tight my-auto">
                                <span className="font-semibold text-sm">{tech.name}</span>
                                <div className="text-xs text-gray-400">{tech.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}