// TODO -> request validation
let posts = () => {
    let db = new Map(); // Temporary in-memory 'db'
    db.set(1, {
        id: 1,
        title: 'Test Post',
        content: '# Hello World \n ### Authored by: Griffin Johnson \n \n > Hello blog',
        time: new Date()
    })

    return {
        getPosts: (req, res) => {
            let results = [];
            console.log('Getting Posts...');

            db.forEach((value, key, map) => {
                results.push(value);
            });

            res.status(200).json(results); 
        },
        getPost: (req, res) => {
            const id = req.params.id || null;
            console.log('Getting Post...');

            if (!db.has(id)) {
                res.status(400).json({
                    error: true,
                    message: `Couldn\'t find post with id ${id}`
                });
            }

            const result = db.get(id);
            res.status(200).json(id);
        },
        createPost: (req, res) => {
            const id = map.size + 1;
            const title = req.body.title;
            const content = req.body.content;
            
            console.log('Creating Posts...');

            db.set(id, {
                id: id,
                title: title,
                content: content,
                time: new Date()
            });

            res.status(200);

        },
        editPost: (req, res) => {
            const id = req.params.id || null;
            const title = req.body.title;
            const content = req.body.content;

            console.log('Editing Posts...');
            if (!db.has(id)) {
                res.status(400).json({
                    error: true,
                    message: `Couldn\'t find post with id ${id}`
                });
            }
            
            db.set(id, {
                id: id,
                title: title,
                content: content,
                time: new Date()
            });

            res.status(200);
        },
        deletePost: (req, res) => {
            const id = req.params.id || null;
            console.log('Deleting Posts...');

            if (!db.has(id)) {
                res.status(400).json({
                    error: true,
                    message: `Couldn\'t find post with id ${id}`
                });
            }

            db.delete(id);
            res.status(200);
        }
    };
};



module.exports = posts();
