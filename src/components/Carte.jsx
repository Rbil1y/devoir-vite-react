function Carte({ titre, description }) {
  return (
    <article className="carte">
      <h2>{titre}</h2>
      <p>{description}</p>
      <button type="button">En savoir plus</button>
    </article>
  )
}

export default Carte
