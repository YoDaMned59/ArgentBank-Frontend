import image from "../assets/Error404.png";

export const Error404 = () => {
  return (
    <>
    <main className="error_404">
      <img src={image} alt="404 en vert" />
      <h1> Erreur! La page que vous demandez n'existe pas.</h1>
      <a href="/">Retourner sur la page d'accueil</a>
    </main>
</>
  );
}