const awsSlsExp = require('aws-serverless-express');
const express = require('express');

const blogEndpoints = require('src/blog-endpoints');

const app = express();

// Import and use endpoints. Right now it's just going to be the blog, but it'll eventually also be users.
app.use(blogEndpoints);

const server = awsSlsExp.createServer(app);

module.exports.handler = async (event, context) => {
  awsSlsExp.proxy(server, event, context);
};
