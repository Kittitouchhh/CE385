import express from 'express';
import { prisma } from './lib/prisma'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


// -------------------------------------------------------------------------------------
//  USER
// -------------------------------------------------------------------------------------
app.get('/user', async (req,res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to fetch users'})
    }
})

app.get('/user/name/:name',async(req,res) =>{
    const {name} = req.params;

    try {
        const users = await prisma.user.findMany({
            where:{
                name: name
            }
        });

        if (users.length === 0) {
            return res.status(404).json({ message: "Not Found"});
        }

        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch User"})
    }
})

app.get('/user/email/:email',async(req,res) => {
    const {email} = req.params;

    try{
        const users = await prisma.user.findMany({
            where:{
                email:email
            }
        });

        res.status(200).json(users)

    } catch (error){
        res.status(500).json({ error: "Failed to fetch User"})
    }
})

app.post('/user',async (req,res) => {
    const {name, email } = req.body;

    if (!email.endsWith("@gmail.com")) {
        return res.status(400).json({ error : "Email must be a @gmail.com"})
    }

    try {
        const user = await prisma.user.create({
            data: {name,email}
        })
        res.status(201).json({message: "Done!", data:user})
    }
    catch(error) {
        res.status(500).json({error:"Failed to Create user"})
    }
});

app.put('/user/:id',async(req,res) => {
    const {id} = req.params;
    const {name,email} = req.body;
    try {
        const user = await prisma.user.update({
            where: { Userid : id},
            data: { name, email }
        })
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to Update User'});
    }
})

app.get('/user/:id',async(req,res) => {
    const {id} = req.params 

    try{
        const user = await prisma.user.findUnique({
            where:{
                Userid:id
            }
        });
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch User"})
    }
})

app.delete('/user/:id', async(req,res) => {
    const {id} = req.params;

    try{
        const user = await prisma.user.delete({
            where:{
                Userid:id
            }
        });
        res.status(200).json({ message:"delete successfully", data:user});
    } catch(error) {
        res.status(404).json({
            error: "Not Found"
        });
    }
});

// -------------------------------------------------------------------------------------
//  POST
// -------------------------------------------------------------------------------------

app.get('/posts',async(req,res) => {
    try{
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch(error) {
        res.status(500).json({ error : "Failed to fetch Post"})
    }
})

app.get('/post/:id',async(req,res) => {
    const {id} =req.params
    try{
        const postuser = await prisma.post.findUnique({
            where:{
                postid: id
            }
        });
        res.status(200).json(postuser)
    } catch(error) {
        res.status(500).json({ error : "Failed to fetch Post"})
    }
})

app.post('/post',async(req,res) => {
    const {title,content,published,authorId} = req.body
    
    if (!title || !authorId){
        return res.status(400).json({
            error:"Required Title and AuthorId"
        });
    }
    try{
        const existingUser = await prisma.user.findUnique({
            where:{
                Userid: authorId
            }
        });

        if (!existingUser){
            return res.status(404).json({
                error : "Author not found"
            });
        }

        const post = await prisma.post.create({
            data: {
                title,content,published:published ?? false,authorId
            }
        });

        res.status(201).json({
            message:"Post Created Successfully",
            data: post 
        });

    }catch (error){
        res.status(500).json({ error: "Failed to create post"})
    }
})

app.put('/post/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, published } = req.body;

  try {
    const existingPost = await prisma.post.findUnique({
      where: { postid: id }
    });

    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    const updatedPost = await prisma.post.update({
      where: { postid: id },
      data: {
        title,
        content,
        published
      }
    });

    res.status(200).json({
      message: "Post updated successfully",
      data: updatedPost
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
});


app.delete('/post/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const existingPost = await prisma.post.findUnique({
      where: { postid: id }
    });

    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    await prisma.post.delete({
      where: { postid: id }
    });

    res.status(204).send();

  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});



app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});