import Header from './components/Header'
import Carte from './components/Carte'
import Footer from './components/Footer'

const cartes = [
  {
    titre: 'Découvrir React',
    description: 'React permet de construire une interface à partir de composants réutilisables.',
  },
  {
    titre: 'Utiliser des composants',
    description: 'Chaque carte reçoit son contenu avec des props : titre et description.',
  },
  {
    titre: 'Organiser son projet',
    description: 'Vite lance rapidement le serveur de développement et prépare le build.',
  },
]

function App() {
  return (
    <div className="page">
      <Header />

      <main id="accueil">
        <section className="hero-section">
          <p className="eyebrow">Projet Vite + React</p>
          <h1>Bienvenue sur mon devoir</h1>
          <p>Cette page assemble un Header, des Cartes et un Footer.</p>
        </section>

        <section id="cartes" className="cards-section" aria-labelledby="cartes-title">
          <h2 id="cartes-title">Mes cartes</h2>
          <div className="cards-grid">
            {cartes.map((carte) => (
              <Carte key={carte.titre} {...carte} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
