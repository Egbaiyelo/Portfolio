import Image from "next/image";


export default function LinkTree() {
    return (
        <div className="mx-auto ">
            Egbaiyelo Moteniola
            <div className="flex flex-row">
                {/* Continue to website */}
                {/* <div>
                    <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf"}>
                        <Image src={"./github.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div> */}
                <div>
                    <a href="https://github.com/Egbaiyelo">
                        <Image src={"./github.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/">
                        <Image src={"./linkedin.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div>
                <div>
                    <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf" download={"Egbaiyelo_Moteniola_Resume.pdf"}>
                        <Image src={"./github.png"} alt="" width={50} height={50}></Image>
                    </a>
                </div>
            </div>
        </div>
    )
}