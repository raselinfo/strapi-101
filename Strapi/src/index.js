"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // We listen to lifecycle events
    strapi.db.lifecycles.subscribe({
      models: ["admin::user"], //only listen to events for this model
      afterCreate: async ({ result }) => {
        //  create an Author instance from the fields of the Admin user that has just been created.
        // Extract the fields from the newly created Admin user
        const {
          id,
          firstname,
          lastname,
          email,
          username,
          createdAt,
          updatedAt,
        } = result;

        await strapi.service("api::author.author").create({
          data: {
            first_name: firstname,
            last_name: lastname,
            email,
            user_name: username,
            createdAt,
            updatedAt,
            admin_user: [id],
          },
        });
      },

      // After update hooks
      afterUpdate: async({result})=>{
        // Get the id of the author that corresponds to the admin user that's been just updated
        const correspondingAuthor=(await strapi.service("api::author.author").find({
          admin_user:[result.id]
        })).results[0]

           const {
             firstname,
             lastname,
             email,
             username,
             updatedAt,
           } = result;
           await strapi
             .service("api::author.author")
             .update(correspondingAuthor.id, {
               data: {
                 first_name: firstname,
                 last_name: lastname,
                 email,
                 user_name: username,
                 updatedAt,
               },
             });
      }
    });
  },
};
