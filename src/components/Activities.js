import React, { useEffect, useState } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
// import Chart from "./Chart";

const Activities = ({ name }) => {
  const [flag, setFlag] = useState({
    commit: false,
    active: false,
    deletion: false
  });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setList([]);
    setFlag({ commit: false, active: false, deletion: false });
    switch (e.target.value) {
      case "Commit":
        setFlag({ commit: true, active: false, deletion: false });
        break;
      case "Addition":
        setFlag({ commit: false, active: true, deletion: false });
        break;
      case "Deletion":
        setFlag({ commit: false, active: false, deletion: true });
        break;

      default:
        break;
    }
    // CommitData();
  };
  const CommitData = async () => {
    const url =
      // (flag.commit &&
      `https://api.github.com/repos/${name}/stats/commit_activity`;
    // (flag.activity &&
    //   `https://api.github.com/repos/${name}/stats/code_frequency`) ||
    // (flag.deletion &&
    //   `https://api.github.com/repos/${name}/stats/contributors`);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // CommitData();
  }, [flag]);

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label=""
          onChange={handleChange}
        >
          <MenuItem value={"Commit"}>Commit</MenuItem>
          <MenuItem value={"Addition"}>Addition</MenuItem>
          <MenuItem value={"Deletion"}>Deletion</MenuItem>
        </Select>
      </FormControl>
      {/* <Chart data={list} /> */}
    </div>
  );
};

export default Activities;
