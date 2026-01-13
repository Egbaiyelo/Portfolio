
import { getTranslations } from 'next-intl/server';
import { Link } from "@/i18n/navigation";
import { BsDiscord } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";


export function Header() {
    return (
        <header style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
            <p>© {new Date().getFullYear()} My Next App</p>
        </header>
    );
}

export function SectionHeading({ heading }: { heading: string }) {

    return (
        <div className="mb-8 mt-8">
            <h1 className="capitalize text-3xl font-bold text-white mb-2">{heading}</h1>
            <div className="h-2 w-24 bg-yellow-400 rounded-br-2xl"></div>
        </div>
    )
}




// ----------------Footer--------------------------


function copyToClipboard() {

}

export async function Footer() {

    const t = await getTranslations('footer');

    return (
        <footer id='footer' className="m-4 flex flex-col md:flex-row justify-between [&>*]:pb-4 m-8 p-7 border-t border-solid border-[#ccc]" >

            {/* <p>© {new Date().getFullYear()} My Next App</p> */}
            {/* email, number, 
      github, linkedin, discord, medium */}


            {/*+ Internationalize alt tags, names, etc */}
            {/*+ Git hooks for en/fr matching */}

            <div>
                <p>© {new Date().getFullYear()} Egbaiyelo Moteniola</p>
            </div>

            <div className="flex flex-col">
                <strong>{t('documents')}</strong>

                <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf" download={"Egbaiyelo_Moteniola_Resume.pdf"}>{t('resume')}</a>
                <a href="/documnets/Egbaiyelo_Moteniola_CV.pdf" download={"Egbaiyelo_Moteniola_CV.pdf"}>{t('cv')}</a>
            </div>


            <div className="flex flex-col items-start">
                <strong>{t('contacts')}</strong>

                {/*+ add to clipboard function */}
                {/*+ switch all to soft then back to hard graphics style */}

                {/* email */}
                <div className="flex">
                    <a href="mailto:moteniola.egbaiyelo@gmail.com">moteniola.egbaiyelo@gmail.com</a>
                    <a href="">
                        <MdContentCopy title='Copy email' size={10} />
                        {/* <Image src={"/white-icons/white-copy.png"} alt="" width={10} height={10} /> */}
                    </a>
                </div>

                {/* telephone */}
                <a href="tel:+17058081912"> +1 (705) 808 1912</a>
            </div>

            <div className="flex flex-col items-start">
                <strong>{t('socials')}</strong>


                <div className="flex flex-row">
                    <a href="https://discord.com/users/" target="_blank" className='p-1'>
                        <BsDiscord title='Discord link' size={40} />
                        {/* <Image src="/white-icons/white-discord.png" alt="Discord link" width={45} height={45} /> */}
                    </a>
                    <a href="https://github.com/" target="_blank" className='p-1'>
                        <FaGithub title='Github link' size={40} />
                        {/* <Image className="p-1.5" src="/white-icons/white-github.png" alt="Github link" width={45} height={45} /> */}
                    </a>
                    <a href="https://www.linkedin.com/in/" target="_blank" className='p-1'>
                        <FaLinkedin title='Linkedin link' size={40} />
                        {/* <Image src="/white-icons/white-linkedin.png" alt="Linkedin link" width={45} height={45} /> */}
                    </a>
                    {/* <a href="" target="_blank" >
            <Image src="/medium.png" alt="Medium link" width={45} height={45} />
          </a>
          <a href="" target="_blank" >
            <Image src="/stack-overflow.png" alt="Stack Overflow link" width={45} height={45} />
          </a> */}
                </div>
            </div>

            {/*+ for footers downloadadales resume and cv maybe then contacts then icons */}
            {/*+ background in geo, ArcGIS, terrain, satellite data */}
        </footer>
    );
}