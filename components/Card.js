import Image from "next/image";
import Link from "next/link";

import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      <Image layout="fill" src={props.img} />
      <Link href={`/${props.id}`}>See More</Link>
    </div>
  );
}

export default Card;
