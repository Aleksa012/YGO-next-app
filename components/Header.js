import classes from "./Header.module.css";
import Link from "next/link";

import { useState } from "react";

function Header() {
  const [showBanlists, setShowBanlists] = useState(false);

  function onShowBanlists(e) {
    e.preventDefault();
    setShowBanlists((prev) => (prev = !prev));
  }

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
        <li onMouseLeave={onShowBanlists} onMouseEnter={onShowBanlists}>
          Banlists
          {showBanlists && (
            <div className={classes.banlists}>
              <Link href="/banlist?name=TCG">TCG</Link>
              <Link href="/banlist?name=OCG">OCG</Link>
              <Link href="/banlist?name=Goat">Goat</Link>
            </div>
          )}
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
