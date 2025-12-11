import LocaleSwitcher from "./LocaleSwitcher";
import { getTranslations } from 'next-intl/server';
import { Link } from "@/i18n/navigation";


export default async function Nav() {
    // icon           about  projects publications resume  fr/en  contact
    // maybe contact button glimmers when getting to the technical skills section

    // when width smaller, only icon and contact remain

    const t = await getTranslations('Nav');

    return (
        <nav className="flex flex-row items-center w-full"
            style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>

            {/* icon */}
            <div className="">
                Egbaiyelo
            </div>

            {/* directions - about... */}
            <ul className="flex mx-auto gap-4 flex-1 justify-center bg-blue-500">
                <li><Link href="/about">{t('about')}</Link></li>
                <li><Link href="/projects">{t('projects')}</Link></li>
                <li><Link href="/publications">{t('publications')}</Link></li>
                <li><Link href="/resume">{t('resume')}</Link></li>
            </ul>

            {/* localeswitcher */}
            <div className="px-4">
                <LocaleSwitcher />
            </div>

            {/* contact button */}
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
                {t("contact-me")}
            </button>
        </nav>
    );
}