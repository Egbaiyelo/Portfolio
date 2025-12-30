import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { Link } from "@/i18n/navigation";

function copyToClipboard() {

}

export default async function Footer() {

  const t = await getTranslations('Footer');

  return (
    <footer className="m-4 flex flex-row justify-between [&>*]:pb-4 m-8 p-7 border-t border-solid border-[#ccc]" >

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
          <a href=""><Image src={"/white-icons/white-copy.png"} alt="" width={10} height={10}/></a>
        </div>

        {/* telephone */}
        <a href="tel:+17058081912"> +1 (705) 808 1912</a>
      </div>

      <div className="flex flex-col items-start">
        <strong>{t('socials')}</strong>


        <div className="flex flex-row">
          <a href="https://discord.com/users/" target="_blank" >
            <Image src="/white-icons/white-discord.png" alt="Discord link" width={45} height={45} />
          </a>
          <a href="https://github.com/" target="_blank" >
            <Image className="p-1.5" src="/white-icons/white-github.png" alt="Github link" width={45} height={45} />
          </a>
          <a href="https://www.linkedin.com/in/" target="_blank" >
            <Image src="/white-icons/white-linkedin.png" alt="Linkedin link" width={45} height={45} />
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