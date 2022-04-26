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
        let imagen:any
        if(request.input('tipo')=='US'){
            imagen="https://rdteam.mx/shop/wp-content/uploads/2020/11/photo_A_OS-03261_SensorUltrasonico_HC-SR04_01_700x700.png"
        }
        if(request.input('tipo')=='TEMP'){
            imagen="https://m.media-amazon.com/images/I/51UGzXn7zlL._SX522_.jpg"
        }
        if(request.input('tipo')=='HUM'){
            imagen="https://m.media-amazon.com/images/I/51UGzXn7zlL._SX522_.jpg"
        }
        if(request.input('tipo')=='GAS'){
            imagen="https://naylampmechatronics.com/img/cms/Blog/Tutorial%20MQ/sensor%20MQ.jpg"
        }
        if(request.input('tipo')=='PIR'){
            imagen="https://www.hwlibre.com/wp-content/uploads/2021/02/sensor-pir-1024x614.jpg.webp"
        }
        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
            let cant=await SensorModelo.SensorModelo.aggregate([ {
              '$count': 'id'
            }]) 
            let canti=cant[0]
            let cantidad=canti.id
            let id=cantidad+1
            console.log(cantidad)
            response=new SensorModelo.SensorModelo({
                "id": id,
                "idx":id,
                "pin": [{
                   "trigger":trigger,
                   "echo":echo
                }],
                "tipo": request.input('tipo'),
                "clave": request.input('clave'),
                "imagen":imagen
            })
            response.save()
            return response
        }
        catch
        {
          await mongoose.connect('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
          let cant=await SensorModelo.SensorModelo.aggregate([ {
            '$count': 'id'
          }]) 
          let canti=cant[0]
          let cantidad=canti.id
          let id=cantidad+1
          console.log(cantidad)
          response=new SensorModelo.SensorModelo({
              "id": id,
              "idx":id,
              "pin": [{
                 "trigger":trigger,
                 "echo":echo
              }],
              "tipo": request.input('tipo'),
              "clave": request.input('clave'),
              "imagen":imagen
          })
          response.save()
          return response
    }
  }
    public async borrarSensor({params,response})
    {
      try
      {
          await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
          response=await SensorModelo.SensorModelo.deleteOne({"id":params.id})
          return response
      }
      catch
      {
          await mongoose.connect('mongodb://3.145.210.35:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
          response=await SensorModelo.SensorModelo.deleteOne({"id":params.id})
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
            await mongoose.connect('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
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
          await mongoose.connect('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
            const id=request.input('id')
            response= await SensorModelo.SensorModelo.updateOne({"id":id},{$set:{"pin":{"trigger":request.input('trigger'),"echo":request.input('echo')},"tipo":request.input('tipo'),"clave":request.input('clave')}})
            return response
        }
    }
    public async guardarMedicion({request,response})
    {
        const id=request.input('id')
        const idx=request.input('idx')
        const clave=request.input('clave')
        const fecha=request.input('fecha')
        const hora=request.input('hora')
        const valor=request.input('valor')

        try
        {
            await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new Valore.Valore({
                "id": id,
                "idx":idx,
                "fecha":fecha,
                "clave": clave,
                "hora":hora,
                "valor":valor,
                "valor2":valor
            })
            response.save()
            return response
        }
        catch
        {
            await mongoose.connect('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false') 
             response=new Valore.Valore({
                "id": id,
                "idx":idx,
                "fecha":fecha,
                "clave": clave,
                "hora":hora,
                "valor":valor,
                "valor2":valor
            })
            response.save()
            return response
    }
}
        public async US({params,response})
        {
            try
            {
                await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
                response=await Valore.Valore.aggregate([
                    {
                      '$match': {
                        'id': Number(params.id)
                      }
                    }, {
                      $lookup: {
                        'from': 'sensors', 
                        'localField': 'id', 
                        'foreignField': 'id', 
                        'as': 'Sensores'
                      }
                    }, {
                      '$unwind': {
                        'path': '$Sensores', 
                        'preserveNullAndEmptyArrays': true
                      }
                    }, {
                      '$project': {
                        'id': 1, 
                        'clave': 1, 
                        'valor': 1, 
                        'created_at': {
                          '$concat': [
                            '$fecha', ' ', '$hora'
                          ]
                        },
                        'valor2':1
                      }
                    }
                ])
                return response
            }
            catch
            {
                await mongoose.connect('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
                response=await Valore.Valore.aggregate([
                  {
                    '$match': {
                      'id': Number(params.id)
                    }
                  }, {
                    $lookup: {
                      'from': 'sensors', 
                      'localField': 'id', 
                      'foreignField': 'id', 
                      'as': 'Sensores'
                    }
                  }, {
                    '$unwind': {
                      'path': '$Sensores', 
                      'preserveNullAndEmptyArrays': true
                    }
                  }, {
                    '$project': {
                      'id': 1, 
                      'clave': 1, 
                      'valor': 1, 
                      'created_at': {
                        '$concat': [
                          '$fecha', ' ', '$hora'
                        ]
                      },
                      'valor2':1
                    }
                  }
              ])
              return response
            }
        }
        public async values({params,response})
        {
            try
            {
                await mongoose.connect('mongodb://18.220.12.4:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
                response=await Valore.Valore.aggregate([
                    {
                      '$match': {
                        'idx': params.id
                      }
                    }, {
                      $lookup: {
                        'from': 'sensors', 
                        'localField': 'id', 
                        'foreignField': 'id', 
                        'as': 'Sensores'
                      }
                    }, {
                      '$unwind': {
                        'path': '$Sensores', 
                        'preserveNullAndEmptyArrays': true
                      }
                    }, {
                      '$project': {
                        'id': 1, 
                        'clave': 1, 
                        'valor': 1, 
                        'created_at': {
                          '$concat': [
                            '$fecha', ' ', '$hora'
                          ]
                        },
                        'valor2':1
                      }
                    }
                ])
                return response
            }
            catch
            {
                await mongoose.connect('mongodb://3.14.126.88:27017/Sensores?readPreference=primary&directConnection=true&ssl=false')
                response=await Valore.Valore.aggregate([
                    {
                      '$match': {
                        'idx': params.id
                      }
                    }, {
                      $lookup: {
                        'from': 'sensors', 
                        'localField': 'id', 
                        'foreignField': 'id', 
                        'as': 'Sensores'
                      }
                    }, {
                      '$unwind': {
                        'path': '$Sensores', 
                        'preserveNullAndEmptyArrays': true
                      }
                    }, {
                      '$project': {
                        'id': 1, 
                        'clave': 1, 
                        'valor': 1, 
                        'created_at': {
                          '$concat': [
                            '$fecha', ' ', '$hora'
                          ]
                        },
                        'valor2':1
                      }
                    }
                ])
                return response
            }
        }
} 
