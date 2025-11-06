import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/2f9b6e71-d93a-4527-8123-ac23efe55055/hero-banner-lojwafx-1762460323299.webp')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Naatal SN</h1>
            <p className="text-xl md:text-2xl mb-8">Connecter l'agriculture sénégalaise pour un avenir durable.</p>
            <Link to="/login" className="bg-naatal-yellow text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-naatal-yellow-dark transition duration-300">Rejoignez-nous</Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-naatal-green-dark mb-6">À propos de Naatal SN</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Naatal SN est une plateforme innovante qui vise à transformer le secteur agricole au Sénégal. Nous connectons les agriculteurs, les chercheurs, les coopératives et les investisseurs pour favoriser la collaboration, le partage des connaissances et la croissance économique.</p>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-naatal-green-dark text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">Espace Agriculteurs</div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">Centre de Recherche</div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">Place de Marché</div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">Ressources & Bibliothèque</div>
          </div>
        </div>
      </section>
    </div>
  );
}