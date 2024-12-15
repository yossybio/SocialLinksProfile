import React from "react";
import ProfileImg from "../assets/images/avatar-jessica.jpeg";
import classes from "../assets/styles/SocialLinksProfile.module.css";
import Button from "./Button/Button";

export default function SocialLinksProfile() {
  return (
    <dialog open className={classes.card}>
      <img width="88px" height="88px" src={ProfileImg} alt="Profile img" />
      <div>
        <h2 className={classes.name}>Jessica Randall</h2>
        <h5 className={classes.address}>London, United Kingdom</h5>
      </div>
      <q className={classes.role}>Front-end developer and avid reader.</q>
      <div className={classes.links}>
        <Button text={"GitHub"} />
        <Button text={"Frontend Mentor"} />
        <Button text={"LinkedIn"} />
        <Button text={"Twitter"} />
        <Button text={"Instagram"} />
      </div>
    </dialog>
  );
}
