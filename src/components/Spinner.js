import React from "react";
import PropTypes from "prop-types";

const Spinner = ({ classes }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e47styh4j461hoa2odmpe2rx2h9utytj5rjdbtu8hfl&rid=giphy.webp&ct=g" />
    </div>
  );
};

Spinner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Spinner;
