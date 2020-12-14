import React from "react";
import "./account.css";

import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";

//atribuindo as props do estilo para a const useStyle
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0px 20px",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function Account() {
  //instanciando a const useStyle
  const classes = useStyles();

  return (
    <div className="nav-account">
      <div className="menu-account">
        <div className={classes.root}>
          <NotificationsIcon />
          <SettingsIcon />
        </div>
        <div className="dropdown-account">
          <span>Usuário</span>
          <div className="seta-usuario">
            <ArrowDropDownIcon />
          </div>
          <Avatar className="avatar">
            <AccountCircleIcon />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
