import React, { Fragment } from "react";

import SideSheet from "../../components/SideSheet";

function index(props) {
  return (
    <Fragment>
      <SideSheet cardSets={props.data} />
    </Fragment>
  );
}

export default index;

export async function getStaticProps(ctx) {
  const data = await fetch(
    "https://db.ygoprodeck.com/api/v7/cardsets.php"
  ).then((res) => res.json());

  return { props: { data: data } };
}
