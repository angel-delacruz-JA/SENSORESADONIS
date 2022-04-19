// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cervos from "App/Models/Cervo";
import { DateTime } from "luxon";
import mongoose from "mongoose";
export default class ServosController 
{
    public async cambiarStatus({request,response})
    {
        const value=request.input('value')
        const Date=new Date()
        try
        {
        await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
        response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":value,"updated_at":Date}})
        return response
        }
        catch
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":value,"updated_at":Date}})
            return response
        }
    }
}
