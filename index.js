const express = require('express');
const app = express();
const port = 8000;
const multer = require('multer');
const upload = multer();
app.set('view engine' , 'ejs');
app.set('views', './views');



app.get('/', (req, res) => {
    res.render('blog');
});
const blogs = [];
app.post('/display', upload.none() , (req, res) => {
    if (req.body.title && req.body.content) {
        let blog = {
            title: req.body.title,
            content: req.body.content
        }

        blogs.unshift(blog);
        res.render('display', {data: blogs})
    }
})

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`)
})