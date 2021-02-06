module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "~bulma/sass/utilities/_all";

            @import "@/assets/scss/_variables.scss";
          `
      }
    }
  }
};
