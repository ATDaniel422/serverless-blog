const express = require('express');

const blogEndpoints = express();

blogEndpoints.get('/', function(req, res) {
  console.log(req);
});

blogEndpoints.get('/:blogId', function(req, res) {

});

blogEndpoints.post('/:blogId', function(req, res) {

});

blogEndpoints.put('/:blogId', function(req, res) {

});

module.exports = blogEndpoints;