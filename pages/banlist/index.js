import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Card from "../../components/Card";

function BanlistPage() {
  const [cards, setCards] = useState([]);
  const router = useRouter();

  const banlist = router.query.name;

  useEffect(() => {
    if (!banlist) return;
    async function fetchBanlist() {
      const data = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=${banlist}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCards(data.data);
        });
    }
    fetchBanlist();
  }, [banlist]);

  return (
    <Fragment>
      {cards &&
        cards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            img={card.card_images[0].image_url}
          />
        ))}
    </Fragment>
  );
}

export default BanlistPage;
