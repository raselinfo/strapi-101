'use strict';

/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService("api::post.post", ({ strapi }) => ({
  async exampleService(...args) {
    console.log(">> exampleService", args);

    return true;
  },
  // Method 2: Wrapping a core service (leaves core logic in place)
  async find(...args) {
    // Calling the default core controller
    const { results, pagination } = await super.find(...args);

    // some custom logic
    results.forEach((result) => {
      result.counter = 1;
    });

    return { results, pagination };
  },

  // Method 3: Replacing a core service
  async findOne(entityId, params = {}) {
    return strapi.entityService.findOne(
      "api::post.post",
      entityId,
      this.getFetchParams(params)
    );
  },


  async findPublic(args){
    console.log(">> args",args)
    const newQuery={
      ...args,
      filters:{
        ...args.filters,
        premium:false
      }
    }
    // Call the entity service
    const publicPosts=await strapi.entityService.findMany("api::post.post",this.getFetchParams(newQuery))

    return publicPosts
  }

,
  async findOneIfPublic(args){
    const {id,query}=args

    const post = await strapi.entityService.findOne(
      "api::post.post",
      id,
      this.getFetchParams(query)
    );


    return  post.premium ? null : post
  },


  async likedPost(args){
    const {postId,userId,query}=args

    // user the underlying entity service api to fetch the post and it's particular likedBy property

    const postToLike=await strapi.entityService.findOne(
      "api::post.post",
      postId,
      {
        populate:["likedBy"]
      }
    )

    console.log(">>>postToLike",postToLike)

    // user underlying entity service api to update the current post with the new relation

    const updatedPost=await strapi.entityService.update(
      "api::post.post",
      postId,
      {
        data:{
          likedBy:[...postToLike.likedBy,userId]
        },
        ...query
      }
    )

    return updatedPost
  }
}));

