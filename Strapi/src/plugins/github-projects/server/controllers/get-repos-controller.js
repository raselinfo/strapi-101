'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("github-projects")
      .service("get_repos_service")
      .getPublicRepos();
  },
});
