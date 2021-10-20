import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "40px",
      }}
    >
      <Link to={`/Biography`}>Biography</Link>
      <Link to={`/ArtGallery`}>ArtGallery</Link>
      <Link to={`/FavoritePicture`}>FavoritePicture</Link>
    </header>
  );
};
