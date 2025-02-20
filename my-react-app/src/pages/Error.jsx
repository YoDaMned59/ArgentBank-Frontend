import image from "../assets/Error404.png";
import { Link } from "react-router-dom";

export const Error404 = () => (
  <main className="error_404">
    <img src={image} alt="404 en vert" />
    <h1>Erreur! La page que vous demandez n'existe pas.</h1>
    <Link to="/">Retourner sur la page d'accueil</Link>
  </main>
);
