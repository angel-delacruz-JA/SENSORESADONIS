// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import mongoose from "mongoose"
import SensorModelo from "App/Models/Sensor"
import Valore from "App/Models/Valore"
export default class SensoresController 
{
        public async guardarMongo({request,response})
    {  
        const trigger=request.input('trigger')
        const echo=request.input('echo')  
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new SensorModelo.SensorModelo({
                "id": request.input('id'),
                "pin": [{
                   "trigger":trigger,
                   "echo":echo
                }],
                "tipo": request.input('tipo'),
                "clave": request.input('clave'),
            })
            response.save()
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new SensorModelo.SensorModelo({
                "id": request.input('id'),
                "pin": [
                    trigger,
                    echo
                ],
                "tipo": request.input('tipo'),
                "clave": request.input('clave'),
            })
            response.save()
            return response
        }
    }
    public async verSensor({params,response})
    {
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find({"id":params.id})
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find({"id":params.id})
            return response
        }
    }
    public async verSensores({response})
    {
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find()
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            response=await SensorModelo.SensorModelo.find()
            return response
        }
    }
    public async modificar({request,response})
    {
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            const id=request.input('id')
            response= await SensorModelo.SensorModelo.updateOne({"id":id},{$set:{"pin":{"trigger":request.input('trigger'),"echo":request.input('echo')},"tipo":request.input('tipo'),"clave":request.input('clave')}})
            return response
        }
        catch
        {
//            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
//            const id=request.input('id')
//            mod= await SensorModelo.SensorModelo.updateOne({"id":id},{$pull:{"pin":{$gte:1}}})
//            response= await SensorModelo.SensorModelo.updateOne({"id":id},{$push:{"pin":[request.input('trigger'),request.input('echo')]}})
//            return response
        }
    }
        public async guardarMedicion({request,response})
    {
        const id=request.input('id')
        const clave=request.input('clave')
        const fecha=request.input('fecha')
        const hora=request.input('hora')
        const valor=request.input('valor')
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new Valore.Valore({
                "id": id,
                "fecha":fecha,
                "clave": clave,
                "hora":hora,
                "valor":valor
            })
            response.save()
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new Valore.Valore({
                "id": id,
                "fecha":fecha,
                "clave": clave,
                "hora":hora,
                "valor":valor
            })
            response.save()
            return response
    }
}
} 
