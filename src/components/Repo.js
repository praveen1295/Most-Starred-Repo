import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
  withStyles,
  Typography,
  ButtonBase,
  Paper,
  Grid,
  Chip,
  Link
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    border: "1px solid black",
    borderRadius: "10px",
    width: "75%",
    margin: "16px auto"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    width: "100%"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  chip: {
    margin: theme.spacing.unit
  },
  link: {
    margin: theme.spacing.unit
  }
});

/* eslint-disable camelcase */
const Repo = ({
  classes,
  avatar_url,
  name,
  html_url,
  owner,
  description,
  stargazers_count,
  open_issues_count,
  // issues_url,
  // stargazers_url,
  created_at
}) => {
  // console.log("last 30 days is: ", moment(created_at).fromNow())

  return (
    <div style={{ width: "100%" }}>
      <Paper className={classes.paper}>
        <Grid container spacing={7}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <a
                href={` https://github.com/${owner} `}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.img}
                  alt="Owner Avatar"
                  src={` ${avatar_url} `}
                />
              </a>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={24}>
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  <Link
                    href={html_url}
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    className={classes.link}
                  >
                    {name}
                  </Link>
                </Typography>
                <Typography gutterBottom variant="headline">
                  {description}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    justifyContent: "flex-start"
                  }}
                >
                  <div>
                    <Chip
                      label={` Stars: ${stargazers_count} `}
                      className={classes.chip}
                      href="#chip"
                      clickable
                      variant="outlined"
                    />
                    <Chip
                      label={` Issues: ${open_issues_count} `}
                      className={classes.chip}
                      clickable
                      variant="outlined"
                    />
                  </div>
                  <Typography color="primary" inline>
                    Submitted {moment(created_at).fromNow()} By {owner}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* <Activities /> */}
    </div>
  );
};

Repo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Repo);
