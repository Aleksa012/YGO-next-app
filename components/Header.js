import classes from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={classes.header}>
      <h1>Yu-Gi-Oh!</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/card-sets">Card Sets</Link>
        </li>
        <li>
          <Link href="/banlist">Banlist</Link>
        </li>
        <li>
          <Link href="/">Deck Lists</Link>
        </li>
        <li>
          <Link href="/">Deck Lists</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
