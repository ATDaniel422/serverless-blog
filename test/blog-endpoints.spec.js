const blogEndpoints = require('../src/blog-endpoints');

describe('get all blogs', () => {
  it('should exist', () => {
    expect(blogEndpoints).toBeTruthy();
  });
});