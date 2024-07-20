import House from "../model/House.js";


class HouseController{

  async index(req,res){
        const {status} = req.query;

        console.log(status)

        const houses = await House.find({status})
        return res.json(houses)
   }

  async store(req,res){
      console.log(req.body)
      console.log(req.file)

      return res.json({ok:true})
  }
}

export default new HouseController();