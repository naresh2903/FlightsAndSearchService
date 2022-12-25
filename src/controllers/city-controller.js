const { CityService }  = require('../services/index');

const cityService = new CityService();

const create = async (req , res)=>{
    try {
        const city = await cityService.createCity(req.body);
        res.status(200).json({
            data:city,
            success:true,
            message:'successfully create city',
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err :error
        })
    }
}
const destroy = async(req , res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        res.status(201).json({
            data:response,
            success:true,
            message:'successfully deleted city',
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete a city",
            err :error
        })
    }
}
const update = async(req , res)=>{
    try {
        const response = await cityService.updateCity(req.params.id , req.body);
        res.status(201).json({
            data:response,
            success:true,
            message:'successfully update city',
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update a city",
            err :error
        })
    }
}
const get = async(req , res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        res.status(201).json({
            data:response,
            success:true,
            message:'successfully get city',
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err :error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update
}