import React, { Fragment } from "react";

import Card from "../../components/Card";

function BanlistPage(props) {
  return (
    <Fragment>
      {props.data.data.map((card) => (
        <Card id={card.id} key={card.id} img={card.card_images[0].image_url} />
      ))}
    </Fragment>
  );
}

export default BanlistPage;

export async function getServerSideProps() {
  const data = await fetch(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=TCG"
  ).then((res) => res.json());
  return { props: { data: data } };
}
