module.exports = [
  {
    method: "GET", // localhost:1337/[plugin-name]/repos . example => localhost:1337/github-projects/repos
    path: "/repos",
    handler: "get_repos_controller.index",
    config: {
      policies: [],
      auth:false
    },
  },
];
