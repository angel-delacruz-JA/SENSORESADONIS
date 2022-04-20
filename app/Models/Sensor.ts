import {Schema,model} from 'mongoose'
export default class SensorModelo
{
    static sensorschema=new Schema({
    id:Number,
    pin:[{trigger:Number,echo:Number}],
    tipo:String,
    clave:String,
    imagen:String
  },{
    versionKey:false
  });
  static SensorModelo:any=model('Sensor',this.sensorschema)  
}
