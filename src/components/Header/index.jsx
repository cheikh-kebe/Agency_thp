import React, {useContext} from "react";
import './index.css';
import { Switch } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ThemeContext } from "../../Themecontext";

export const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={theme ? 'header dark' : 'header light'}>
      <h1>THP Agency</h1>
      <h3>
        <a href="https://github.com/shanksthered/">Lien GitHub</a>
      </h3>
      <Grid component="label" alignItems="center">
        <Grid item>Dark Off</Grid>
        <Grid item>
          <Switch onChange={toggleTheme} />
        </Grid>
        <Grid item>Dark On</Grid>
      </Grid>
    </div>
  );
};
