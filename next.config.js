module.exports = {
  target: "serverless",
  serverless: {
    timeout: 30,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "en.wikipedia.org",
      "material-properties.org",
      "assets/",
    ],
  },
};
