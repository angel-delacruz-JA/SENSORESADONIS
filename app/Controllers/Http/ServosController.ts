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
        await mongoose.createConnection('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
        const status=await Cervos.Cervos.find()
        const value=status[0]
        if(value['value']==1)
        {
            await mongoose.createConnection('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":0}})
            return response
        }
        else
        {
            await mongoose.createConnection('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":1}})
            return response
        }
        return response
        }
        catch
        {
            await mongoose.createConnection('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
        const status=await Cervos.Cervos.find()
        const value=status[0]
        if(value['value']==1)
        {
            await mongoose.createConnection('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":0}})
            return response
        }
        else
        {
            await mongoose.createConnection('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.updateOne({"id":1},{$set:{"value":1}})
            return response
        }
        return response
        }
    }
    public async obtenerStatus({response})
    {
        try
        {
            await mongoose.createConnection('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.find()
            const status=response[0]
            const value=status['value']
            return value
        }
        catch
        {
            await mongoose.createConnection('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response= await Cervos.Cervos.find()
            const status=response[0]
            const value=status['value']
            return value
        }
    }
    
}
