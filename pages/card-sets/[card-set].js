import React, { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";

import Card from "../../components/Card";

function CardSet() {
  const router = useRouter();
  const [cards, setCards] = useState([]);

  const set = router.query["card-set"];

  useEffect(() => {
    if (!set) return;
    const fetchData = async function () {
      const data = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=${set}`
      ).then((res) => res.json());

      setCards(data.data);
    };
    fetchData();
  }, [set]);

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
      {!cards && <NoCardsFound />}
    </Fragment>
  );
}

export default CardSet;

function NoCardsFound() {
  const router = useRouter();

  setTimeout(() => {
    router.replace("/card-sets");
  }, 3000);

  return <p className="error">No Cards Found!</p>;
}
