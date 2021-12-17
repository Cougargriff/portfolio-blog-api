const posts = require('./posts.js');

const routes = [
    {
        path: '/posts/:id',
        method: 'GET',
        action: [posts.getPost]
    },
    {
        path: '/posts',
        method: 'GET',
        action: [posts.getPosts] 
    },
    {
        path: '/posts/:id',
        method: 'DELETE',
        action: [posts.deletePost] 
    },
    {
        path: '/posts/:id',
        method: 'PUT',
        action: [posts.editPost] 
    },
    {
        path: '/posts',
        method: 'POST',
        action: [posts.createPost] 
    }
];

module.exports = routes;
