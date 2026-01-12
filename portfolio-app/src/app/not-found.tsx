import LinkTreeComp from "@/components/LinkTree";


export default function NotFound() {
  return (

        <main className="min-h-screen flex items-center justify-center">  
              <div className="flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-4xl font-bold mb-4">404 root - Page Not Found / Page introuvable</h2>
        <p className="mb-8 text-gray-400">The page you're looking for doesn't exist./ Désolé, main nous n'avons pas trouvé le contenu que vous recherchiez </p>
      </div>
          <LinkTreeComp />
        </main>

  )
}