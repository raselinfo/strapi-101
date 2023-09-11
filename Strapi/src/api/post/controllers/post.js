"use strict";

/**
 * post controller
 */
//  async example(ctx) {
//    const result= await strapi.service("api::post.post").exampleService()
//     return { okay: result };
//   },

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({

  async example(ctx){
    const result=await strapi.service("api::post.post").exampleService({name:"rasel"})

    return {data:result}
  },
  // async example(ctx) {
  //   await this.validateQuery(ctx);

  //   const sanitizedQueryParams = await this.sanitizeQuery(ctx);

  //   const { results, pagination } = await strapi
  //     .service("api::post.post")
  //     .find(sanitizedQueryParams);
  //   console.log(results);

  //   const sanitizedResults = await this.sanitizeOutput(results, ctx);
  //   return this.transformResponse(sanitizedResults, { pagination });
  // },


// Solution 1: fetched all posts and filtered them afterwards
  // async find(ctx) {
  //   //  fetch all posts
  //   const {data,meta}=await super.find(ctx)
  //   if(ctx.state.user){
  //     console.log(ctx.state.user);
  //     return {data,meta}
  //   }
  // // Not authenticated
  // const filteredData=data.filter(post=>!post.attributes.premium)

  // return {data:filteredData,meta}
  // },


// // Solution 2: rewrite the action to fetch only need posts

// async find(ctx){
//   console.log(ctx.query)
//   // if the request is authenticated
//   const isRequestingNonPremium=ctx?.query?.filters?.premium == 'false'
//   console.log(">>>>> isRequestingNonPremium",isRequestingNonPremium)
//   if (ctx.state.user || isRequestingNonPremium) {
//     console.log(">> authenticated user")
//     return await super.find(ctx);
//   }

//   // if  the request is public
//   // let's call the underlying service with additional filter param: premium = false
//   const filteredData = await strapi.service("api::post.post").find({
//     ...ctx.query,
//     filters: {
//       ...ctx.query.filters,
//       premium: false,
//     },
//   });

//   const sanitizedPosts=await this.sanitizeOutput(filteredData,ctx)
//   return this.transformResponse(sanitizedPosts)

// },



// Solution 3: create a  custom service to call public posts
async find(ctx){
  const isRequestingNonPremium=ctx?.query?.filters?.premium==='false'
  if(ctx.state.user || isRequestingNonPremium) return await super.find(ctx)

  // if the request is public
  const publicPOsts=await strapi.service("api::post.post").findPublic(ctx.query)

  const sanitizedPost = await this.sanitizeOutput(publicPOsts, ctx);

  return this.transformResponse(sanitizedPost)
},

//   async findOne(ctx){
//     const {data}=await super.findOne(ctx)
//     return {data}
//   }

// async findOne(ctx){
//     const {id}=ctx.params

//     const entity = await strapi
//       .service("api::post.post")
//       .findOne(id, ctx.query);

//     const sanitizedEntity=await this.sanitizeOutput(entity,ctx)

//     console.log(">> results", sanitizedEntity);

//     // return this.transformResponse(sanitizedEntity);
//     return  sanitizedEntity
// }


async findOne(ctx){
// if request authenticated
  if(ctx.state.user) return await this.super.findOne(ctx)


  const {id}=ctx.params;
  const {query}=ctx

  const postIfPublic=await strapi.service("api::post.post").findOneIfPublic({
      id,query
  })

  const sanitizedEntity=await this.sanitizeOutput(postIfPublic)

  return this.transformResponse(sanitizedEntity)
},

async likedPost(ctx){
  const user=ctx.state.user
  const postId=ctx.params.id
  const {query}=ctx
  const updatedPost=await strapi.service("api::post.post").likedPost({
    postId,userId:user.id,query
  })

  const sanitizedEntity=await this.sanitizeOutput(updatedPost,ctx)
  return this.transformResponse(sanitizedEntity)
}


}));
