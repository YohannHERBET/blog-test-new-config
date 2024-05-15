export const Header = () => {
  return (
    <header className="flex h-16 items-center justify-center border-b px-4 md:px-6">
      <nav className="flex items-center gap-4 bg-slate-700/10 p-1 sm:gap-6">
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          Articles
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </nav>
    </header>
  );
};
