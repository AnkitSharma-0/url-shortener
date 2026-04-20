const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

/// this function generate randome string for url
function generateCode() {
    return Math.random().toString(36).substring(2,8);
}

app.post("/shorten", async (req,res) => {
    const { longUrl } = req.body;
    if(!longUrl) {
        return res.status(400).json({error : "URL is required" });
    }
    const shortCode = generateCode();
    const url = await prisma.url.create({
        data : {
            longUrl,
            shortCode,
        },
    });
    res.json({
        shortUrl: `http://localhost:3000/${shortCode}`,
    });
})

app.get("/",(req,res) => {
    res.send("Server is running");
});

app.get("/test", async (req, res) => {
    const data = await prisma.url.findMany();
    res.json(data);
});

app.get("/:code", async (req, res) => {
    const { code } = req.params;

    const url = await prisma.url.findUnique({
        where : { shortCode: code },
    });
    await prisma.url.update({
        where: { shortCode: code },
        data: {
            clicks: { increment: 1 },
        },
    });

    if(!url){
        return res.status(404).send("URL not found");
    }
    res.redirect(url.longUrl);
});

app.get("/analytics/:code", async (req, res) => {
    const { code } = req.params;
    const url = await prisma.url.findUnique({
        where: { shortCode : code },
    });

    if(!url){
        return res.status(404).send("Not found");
    }
    res.json({
        longUrl : url.longUrl,
        clicks: url.clicks,
    });
});

app.listen(3000,() => {
    console.log("Server running on port 3000");
});

//test-database --------------------//