import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 flex flex-col sm:flex-row justify-between">
        <Link to='' className="underline text-slate-600 hover:text-blue-500">Home</Link>
        <h1 className="text-3xl font-semibold">Sara Maia's front-end test</h1>
        <a href="https://www.saramaia.me" className="underline text-slate-600 hover:text-blue-500" target="_blank" rel="noreferrer">About me</a>
      </header>
    );
};

export default Header;