import React, { Fragment, useEffect, useState } from "react";

import { useRouter } from "next/router";

import Image from "next/image";

function CardDetails() {
  const router = useRouter();
  const [card, setCard] = useState(null);
  const cardId = router.query["card-details"];

  useEffect(() => {
    if (!cardId) return;
    async function getCard() {
      const data = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`
      ).then((res) => res.json());

      setCard(data.data[0]);
    }
    getCard();
  }, [cardId]);

  return (
    <Fragment>
      {card && (
        <Image width={500} height={680} src={card.card_images[0].image_url} />
      )}
      {card && (
        <div className="card-details">
          <h2>{card.name}</h2>
          <p>
            Level: {card.level} <br />
            Type: {card.type} <br />
            Race: {card.race} <br />
            Attribute: {card.attribute} <br />
            Description: {card.desc} <br />
            Price: $
            {card.card_prices
              ? card.card_prices[0].ebay_price
              : "Not in stores!"}
            on E-bay <br />
            Sets:{" "}
            {card.card_sets
              ? card.card_sets.map((set) => set.set_name + " ").slice(0, 5)
              : "No sets!"}
            <br />
            and more...
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default CardDetails;
