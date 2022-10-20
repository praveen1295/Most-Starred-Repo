import "./styles.css";
import React, { useState, useEffect } from "react";
import RepoList from "./components/RepoList";
import Spinner from "./components/Spinner";
import moment from "moment";

function App() {
  const [state, setState] = useState({
    repo: [],
    error: "",
    page: 1,
    loading: true,
  });
  const { page, repo } = state;

  const getData = async () => {
    const DATE_30_DAYS_BEFORE = moment()
      .subtract(30, "days")
      .format("YYYY-MM-DD");
    // console.log("DATE_30_DAYS_BEFORE", DATE_30_DAYS_BEFORE);
    const url = ` https://api.github.com/search/repositories?q=created:>${DATE_30_DAYS_BEFORE}&sort=stars&order=desc&page=${page} `;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setState({ ...state, repo: data.items, loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    const { loading } = state;

    if (
      window.pageYOffset + window.innerHeight >= window.innerHeight &&
      !loading
    ) {
      loadData();
    }
  };

  const loadData = () => {
    const { page } = state;

    setState((prevState) => ({
      ...state,
      page: state.page + page,
      loading: true,
    }));
    getData();
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleLoadMore);
  }, []);
  return (
    <div>
      <h1
        style={{ width: "100%", fontFamily: "sans-serif", textAlign: "center" }}
      >
        Most Starred Repos
      </h1>
      <RepoList repo={state.repo} />
      <Spinner />
    </div>
  );
}

export default App;
