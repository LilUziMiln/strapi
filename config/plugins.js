module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_MgnjMG60IHocp2IMEKMEBZ0GYEk8/BzYrBdVyin",
            apiToken: "qzVlncATnun3DkEpcM6pwbHR",
            appFilter: "strapi",
            teamFilter: "liluzimiln",
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
});