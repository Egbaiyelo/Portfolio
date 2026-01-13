// error page also has linktree

import Link from "next/link";
import { FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineContactPage, MdOutlineMailOutline } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";


export default function LinkTreeComp() {
    return (
        <div className="mx-auto p-8 bg-[#1A1A1A] w-fit  mt-20 rounded-xl">
            <h1 className="text-4xl w-fit font-bold text-white mx-auto mb-5">Egbaiyelo Moteniola</h1>
            <p className="mx-auto w-fit mb-1">Connect with me</p>
            <p className="mx-auto w-fit mb-3 italic">Contactez-moi</p>
            <Link
                href="/"
                className="mt-5 mx-auto w-fit flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl transition-all group"
            >
                <TbWorldWww size={24} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
                <div className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-bold">Main Website</span>
                    <span className="text-[10px] uppercase opacity-60">Site Principal</span>
                </div>
            </Link>
            <div className="flex flex-row justify-between w-full mt-12">
                {/* Continue to website */}
                {/* <div>
                    <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf"}>
                        <Image src={"./github.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div> */}
                <div>
                    <a href="https://github.com/Egbaiyelo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors ">
                        <FaGithub title="Github link" size={50} />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/moteniola-egbaiyelo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0077B5] transition-colors ">
                        <FaLinkedin title="Linkeind Link" size={50} />
                    </a>
                </div>
                <div>
                    <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf"
                        download={"Egbaiyelo_Moteniola_Resume.pdf"}
                        className="text-gray-400 hover:text-yellow-400 transition-colors "
                        title="Download Resume">
                        <MdOutlineContactPage title="Resume Link" size={50} />
                    </a>
                </div>
                <div>
                    <a href="mailto:moteniola.egbaiyelo@gmail.com?subject=Inquiry from Portfolio"
                        className="text-gray-400 hover:text-red-400 transition-colors "
                        title="Download Resume">
                        <MdOutlineMailOutline title="Email" size={50} />
                    </a>
                </div>
            </div>
        </div>
    )
}