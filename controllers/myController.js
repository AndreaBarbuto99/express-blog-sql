const connection = require("../data/db");








// index

function index(req, res) {

    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);

    });

}

// show 

function show(req, res, next) {
    const id = parseInt(req.params.id);

    const sql = 'SELECT * FROM posts WHERE id = ?'

    const sqlWithTags = 'SELECT tags.label FROM posts JOIN post_tag ON posts.id = post_tag.post_id JOIN tags ON post_tag.tag_id = tags.id WHERE posts.id = ? '

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'Post not found' });
        const post = results[0]



        connection.query(sqlWithTags, [id], (err, tagsResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });

            post.tags = tagsResults;
            res.json(post);
        });
    });
}


// // store

// function store(req, res) {
//     const myId = Date.now();

//     const newPost = {
//         id: myId,
//         title: req.body.title,
//         content: req.body.content,
//         image: req.body.image,
//         tags: req.body.tags
//     };

//     postsList.push(newPost);

//     console.log(postsList);

//     res.status(201);
//     res.json(newPost);

// }

// // update

// function update(req, res, next) {

//     const myId = parseInt(req.params.id);
//     const updatePost = postsList.find(e => e.id === myId)


//     if (!updatePost) {
//         throw next(new Error("Post non trovato"))
//     }

//     updatePost.title = req.body.title;
//     updatePost.content = req.body.content;
//     updatePost.image = req.body.image;
//     updatePost.tags = req.body.tags;

//     res.json(updatePost);



// }

// // modify 

// function modify(req, res, next) {
//     const myId = parseInt(req.params.id);
//     let modifiedPost = postsList.find(e => e.id === myId);

//     if (!modifiedPost) {
//         throw next(new Error("Post non trovato"))
//     }

//     req.body.title ? modifiedPost.title = req.body.title : modifiedPost.title = modifiedPost.title;
//     req.body.content ? modifiedPost.content = req.body.content : modifiedPost.content = modifiedPost.content;
//     req.body.image ? modifiedPost.image = req.body.image : modifiedPost.image = modifiedPost.image;
//     req.body.tags ? modifiedPost.tags = req.body.tags : modifiedPost.tags = modifiedPost.tags;

//     res.json(modifiedPost);
// }

// // destroy

function destroy(req, res, next) {
    const id = parseInt(req.params.id);

    const sqlDelete = 'DELETE FROM posts WHERE id = ?'

    connection.query(sqlDelete, [id], (err) => {
        if (err) return res.status(500).json({ error: "Failed to delete the post" });
        res.sendStatus(204);
    })





}

module.exports = { index, show, destroy };