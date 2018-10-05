module.exports={
    getHouses:(req,res,next)=>{
        const db=req.app.get('db')

        db.get_houses()
        .then(Houses=>res.status(200).send(Houses))
        .catch(err=>{
            res.status(500).send({errorMessage:'Oops couldnt grab those houses'})
            console.log(err)
        })
    },

}