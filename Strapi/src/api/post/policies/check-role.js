'use strict';

/**
 * `is-admin` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
const {userRole}=config 
console.log(">> come from policy",userRole)
if (userRole) {
      return true;
    }

    return false;
};
