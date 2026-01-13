import './globals.css';
import LinkTreeComp from "@/components/LinkTree";
import { GiPathDistance } from "react-icons/gi";
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex gap-15 min-h-screen items-center justify-center bg-[#0a0a0a] text-center px-4">
      <div className='flex flex-col items-center'>
        <div className="mb-6 animate-pulse text-yellow-400">
          <GiPathDistance size={120} />
        </div>

        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-2">404</h2>
          <h3 className="text-xl font-medium text-gray-200 mb-6 uppercase tracking-widest">
            Page Not Found / Page Introuvable
          </h3>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            The path you followed doesn't exist. <br />
            <span className="italic text-sm opacity-75">Le chemin que vous avez suivi n'existe pas.</span>
          </p>

          {/* Primary Action */}
          <Link
            href="/"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
          >
            Return Home / Retour à l'accueil
          </Link>
        </div>
      </div>

      {/* Socials Section */}
      <div className=" opacity-80 hover:opacity-100 transition-opacity">
        <LinkTreeComp />
      </div>
    </main>
  );
}