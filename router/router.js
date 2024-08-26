const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('home', {
        blogs: blogs.blogs,
    });
})

router.get("/images/favicon", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/Favicon/favicon.ico"));
})

router.get("/images/logo", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/Logo/CodeBlogs.png"))
})
router.get("/about", (req, res) => {
    res.render('about');
})

router.get("/contact", (req, res) => {
    res.render('contact');
})

router.get("/blogpost/:slug", (req, res) => {
    res.render(`blogpost/${req.params.slug}`);
})

router.get("/blogposts/popular", (req, res) => {
    res.render('blogposts/popular', {
        blogs: blogs.blogs,
    });
})

router.get("/blogposts/new", (req, res) => {
    res.render('blogposts/new', {
        blogs: blogs.blogs,
    });
})

router.get("/blogposts", (req, res) => {
    res.render('blogpost', {
        blogs: blogs.blogs,
    })
})

router.get("/images/:slug", (req, res) => {
    res.sendFile(path.join(__dirname, `../static/images/${req.params.slug}`));
})

module.exports = router;