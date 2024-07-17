import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {};
  return (
    <div className="flex flex-row w-full justify-between px-10 py-5 shadow-md  bg-slate-100">
      <h2 className="font-bold">WELCOME, FAKE MOVIE</h2>
      <div className="flex flex-row gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/movie"}>Movie</Link>
        <Link to={"/tv-show"}>TV Show</Link>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
