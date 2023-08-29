import express from "express";
const app = express();
app.use(express.json());
app.listen(3001);

app.get("/somar/:w/:z", function(req, res){
    const {w, z} = req.params;
    let ww = parseFloat(w);
    let zz = parseFloat(z);
    /*
    //com isso pode apagar os let ww e let zz
    let r = parseFloat(w) + parseFloat(z);
    res.send({r});
    */
    res.send(ww + zz + "");
});

app.post("/subtrair", function(req, res){
    const {x,y} = req.body;
    let r = parseFloat(x) - parseFloat(y);
    res.send({r});
});