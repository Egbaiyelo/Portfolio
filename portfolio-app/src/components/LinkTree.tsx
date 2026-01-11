// error page also has linktree

import Image from "next/image";


export default function LinkTreeComp() {
    return (
        <div className="mx-auto p-8 bg-[#1A1A1A] w-fit  mt-20 rounded-xl">
            <h1 className="text-4xl w-fit font-bold text-white mx-auto mb-5">Egbaiyelo Moteniola</h1>
            <p className="mx-auto w-fit mb-3">My links</p>
            <div className="flex flex-row justify-between w-full mt-12">
                {/* Continue to website */}
                {/* <div>
                    <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf"}>
                        <Image src={"./github.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div> */}
                <div>
                    <a href="https://github.com/Egbaiyelo">
                        <Image src={"/github.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/moteniola-egbaiyelo">
                        <Image src={"/linkedin.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div>
                <div>
                    <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf" download={"Egbaiyelo_Moteniola_Resume.pdf"}>
                        <Image src={"/github.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div>
            </div>
        </div>
    )
}