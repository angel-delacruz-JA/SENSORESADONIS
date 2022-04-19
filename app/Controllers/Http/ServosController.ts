// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cervos from "App/Models/Cervo";
import mongoose from "mongoose";
export default class ServosController 
{
    public async cambiarStatus({request,response})
    {
        const value=request.input('value')
        try
        {
        await mongoose.connect('mongodb://18.220.12.4:27017/servos?readPreference=primary&directConnection=true&ssl=false')
        response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":value}})
        return response
        }
        catch
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/servos?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":value}})
            return response
        }
    }
    public async obtenerStatus({response})
    {
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.find()
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.find()
            return response
        }
    }
}
