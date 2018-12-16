module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    autoprefixer: {},
    cssnano: ctx.env === 'production' ? {} : false
  }
})
