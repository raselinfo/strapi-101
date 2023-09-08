"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({

  async example(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const { results, pagination } = await strapi
      .service("api::post.post")
      .find(sanitizedQueryParams);
    console.log(results);

    const sanitizedResults = await this.sanitizeOutput(results, ctx);
    return this.transformResponse(sanitizedResults, { pagination });
  },


  async find(ctx) {
      // /posts?filters[content][$containsi]=next
    ctx.query = { ...ctx.query, local: "en",filters:{content: {$containsi:"next"}}};

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },

//   async findOne(ctx){
//     const {data}=await super.findOne(ctx)
//     return {data}
//   }

async findOne(ctx){
    const {id}=ctx.params
    
    const entity = await strapi
      .service("api::post.post")
      .findOne(id, ctx.query);

    const sanitizedEntity=await this.sanitizeOutput(entity,ctx)

    console.log(">> results", sanitizedEntity);

    // return this.transformResponse(sanitizedEntity);
    return  sanitizedEntity
}
}));
