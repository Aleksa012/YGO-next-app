// import React, { useEffect, useState } from "react";

// import { useRouter } from "next/router";
// import Card from "../components/Card";

// function CardDetails() {
//   const router = useRouter();
//   const [card, setCard] = useState({});
//   const cardId = router.query["card-details"]
//     ? router.query["card-details"]
//     : "80143954";

//   useEffect(() => {
//     async function getCard() {
//       const data = await fetch(
//         `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`
//       ).then((res) => res.json());

//       setCard(data.data[0]);
//     }
//     getCard();
//   }, [cardId]);

//   return <div>{card && <Card img={card.card_images[0].image_url} />}</div>;
// }

// export default CardDetails;
