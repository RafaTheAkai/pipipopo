const { ObjectId } = require("mongodb");

module.exports = (app)=>{
    app.get("/noticias/tipo/:tiponoticia", async (req, res)=> {
        try{
        const tiponoticia = req.params.tiponoticia
        await app.dbClient.connect();
            const resultado = await app.dbClient.db('portalnoticias')
            .collection('noticias')
            .find({tiponoticias : tiponoticia})
            .toArray();
            res.json(resultado);
        }catch(error){
            res.json(error)
        }
    });
}