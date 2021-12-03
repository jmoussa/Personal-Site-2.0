import { createStore } from "vuex";
import GitHub from "github-api";

export default createStore({
  state: {
    github_projects: [],
  },
  mutations: {
    setGithubProjects(state, projects) {
      state.github_projects = projects;
    },
  },
  getters: {
    getGithubProjects: (state) => state.github_projects,
  },
  actions: {
    getUserProjects({ commit }, github_username) {
      const gh = new GitHub();
      let me = gh.getUser(github_username);
      me.listRepos({ sort: "updated", type: "public" }, (err, repos) => {
        if (!err) {
          let final_repos = [];
          for (let idx in repos) {
            let r = repos[idx];
            if (!r.archived && r.name != "jmoussa") {
              final_repos.push(r);
            }
          }
          console.log(final_repos[0]);
          commit("setGithubProjects", final_repos);
        } else {
          console.err(err);
        }
      });
    },
  },
});
