module.exports={
    beforeCreate:async({params})=>{
        // find the admin user who is about to create the post
        const adminUserId=params.data.createdBy
        console.log(adminUserId)
        // find the corresponding Author
        const author=(await strapi.entityService.findMany("api::author.author",{
            filters:{
                admin_user:[adminUserId]
            }
        }))[0]
        // const author =await strapi.entityService.findOne("api::author.author",adminUserId)
        console.log(author)

        // update thee data payload of the requests for creating the new post by adding the Author to the author relation field
        console.log(params.data.authors.connect)
        params.data.authors.connect=[...params.data.authors.connect, author.id]

    }
}