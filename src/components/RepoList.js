import React from "react";
import Repo from "./Repo";
import Activities from "./Activities";

const RepoList = ({ repo }) => {
  return (
    <div>
      {repo.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: 1,
              border: "1px solid black",
              borderRadius: "10px",
              width: "75%",
              margin: "16px auto"
            }}
          >
            <Repo
              key={repo[index].id}
              avatar_url={repo[index].owner.avatar_url}
              owner={repo[index].owner.login}
              name={repo[index].name}
              html_url={repo[index].html_url}
              description={repo[index].description}
              stargazers_count={repo[index].stargazers_count}
              open_issues_count={repo[index].open_issues_count}
              // issues_url = { repo[index].issues_url }
              // stargazers_url = { repo[index].stargazers_url }
              created_at={repo[index].created_at}
            />
            <Activities name={repo[index].full_name} />
          </div>
        );
      })}
    </div>
  );
};

export default RepoList;
