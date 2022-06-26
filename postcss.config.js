module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // minimize css in production
    ...(process.env.NODE_ENV === "production"
      ? { cssnano: { preset: ["default"] } }
      : {}),
  },
};
