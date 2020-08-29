var express = require('express'),
    port  = process.env.PORT || 3000;
app = express();


app.get('/', (req, res) => {
res.json({hello:"world"})
})

app.listen(port, () => console.log(`server running at ${port}`))
