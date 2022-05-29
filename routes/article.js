const express = require('express');
const router = express.Router();

const Article = require('../models/article');

//@Api http://localhost:7000/api/articles
//@desc Add new Article
//@access public
router.post("/Home", (req, res) => {
    const newArticle = new Article({ ...req.body })
    newArticle
        .save()
        .then(article => res.status(200).json({ msg: "successfuly added", article }))
        .catch(err => res.status(400).json(err))
});

//@Api http://localhost:7000/api/articles
//@desc Get all Articles
//@access public
router.get('/', (req, res) => {
    Article.find()
           .then(articles => res.status(200).json(articles))
           .catch(err => res.status(400).json(err))
})

//@Api http://localhost:7000/api/articles/:id
//@desc Get Article By id
//@access public
router.get('/:_id', (req, res) => {
    let { _id } = req.params
    Article.find({ _id })
           .then(Article => res.send(article))
        .catch(err => res.status(400).json(err))
})

//@Api http://localhost:7000/api/articles/:id
//@desc Delete Article By id
//@access public
router.delete('/:_id', (req, res) => {
    let { _id } = req.params
    Article.findByIdAndDelete( _id )
           .then(() => res.send("Article has been deleted"))
           .catch(err => res.send(err))
})

//@Api http://localhost:7000/api/articles/:id
//@desc Update Article By id
//@access public
router.put('/:_id', (req, res) => {
    let { _id } = req.params
    Article.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
           .then(() => res.send("Article has been updated"))
           .catch(err => res.send(err))
})

module.exports = router