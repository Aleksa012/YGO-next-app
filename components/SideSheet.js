import React from "react";

import classes from "./SideSheet.module.css";
import Link from "next/link";

function SideSheet({ cardSets }) {
  return (
    <div className={classes["side-sheet"]}>
      <div>
        {cardSets && (
          <ul>
            {cardSets.map((set) => (
              <Link key={set.set_name} href={`/card-sets/${set.set_name}`}>
                {set.set_name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SideSheet;
