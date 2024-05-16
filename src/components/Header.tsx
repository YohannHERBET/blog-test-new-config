export const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-center border-b p-5 px-4 md:px-6">
      <nav className="flex items-center gap-4 rounded-lg p-1 sm:gap-6">
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
