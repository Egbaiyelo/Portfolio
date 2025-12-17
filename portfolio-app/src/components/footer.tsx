import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { Link } from "@/i18n/navigation";

export default async function Footer() {

  const t = await getTranslations('Nav');

  return (
    <footer className="m-4 flex flex-row justify-between [&>*]:pb-4 m-8 p-7 border-t border-solid border-[#ccc]" >

      {/* <p>© {new Date().getFullYear()} My Next App</p> */}
      {/* email, number, 
      github, linkedin, discord, medium */}

      <div>
        <p>© {new Date().getFullYear()} Egbaiyelo Moteniola</p>
      </div>

      <div className="flex flex-col">
        <strong>Documents</strong>

        <a href="/documents/Resume_Egbaiyelo_Moteniola_Software_Developer.pdf" download={"Egbaiyelo_Moteniola_Resume.pdf"}>Resume</a>
        <a href="/documnets/Egbaiyelo_Moteniola_CV.pdf" download={"Egbaiyelo_Moteniola_CV.pdf"}>CV</a>
      </div>


      <div className="flex flex-col items-start">
        <strong>Contacts</strong>

        {/*+ add to clipboard function */}

        {/* email */}
        <a href="mailto:moteniola.egbaiyelo@gmail.com">moteniola.egbaiyelo@gmail.com</a>

        {/* telephone */}
        <a href="tel:+17058081912"> +1 (705) 808 1912</a>
      </div>

      <div className="flex flex-col items-start">
        <strong>Socials</strong>


        <div className="flex flex-row">
          <a href="https://discord.com/users/" target="_blank" >
            <Image src="/white-icons/white-discord.png" alt="Discord link" width={45} height={45} />
          </a>
          <a href="https://github.com/" target="_blank" >
            <Image src="/white-icons/white-github.png" alt="Github link" width={45} height={45} />
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