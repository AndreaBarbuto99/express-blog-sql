const connection = require("../data/db");








// index

function index(req, res) {

    const sql = "SELECT * FROM posts"

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);

    });

}

// // show 

// function show(req, res, next) {
//     const myId = parseInt(req.params.id);
//     const filteredPost = postsList.find(e => e.id === myId)

//     if (!filteredPost) {
//         throw next(new Error("Post non trovato"))
//     }




//     res.json(filteredPost)
// }


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

// function destroy(req, res, next) {
//     const myId = parseInt(req.params.id);

//     const filteredDeletePost = postsList.find(e => e.id === myId)

//     if (!filteredDeletePost) {
//         throw next(new Error("Post non trovato"))
//     }

//     postsList.splice(postsList.indexOf(filteredDeletePost), 1)

//     console.log(postsList);


//     res.sendStatus(204);

// }

module.exports = { index };