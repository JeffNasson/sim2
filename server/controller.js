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

    addHouse:(req,res,next)=>{
        const db=req.app.get('db')
        const {name,address,city,state,zip}=req.body

        db.add_house([name,address,city,state,zip])
        .then((Houses)=>res.status(200).send(Houses))
        .catch(err=>{
            res.status(500).send({errorMessage:'Couldnt add new house'})
            console.log(err)
        })
    },

    deleteHouse:(req,res,next)=>{
        const {id}=req.params;
        const db=req.app.get('db')

        db.delete_house([id])
        .then(()=>res.status(200))
        .catch(err=>{
            res.status(500).send({errorMessage:`Could not delete a house`})
            console.log(err)
        })
    },

    updateHouse:()=>{}

}