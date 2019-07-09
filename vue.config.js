module.exports = {
    // chainWebpack: config => config.resolve.symlinks(false),
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/styles/_variables.scss";`
        }
      }
    }
  };
