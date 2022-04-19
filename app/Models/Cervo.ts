import {Schema,model} from 'mongoose'
export default class Cervos {
  
  static cervoschema=new Schema({
    id:Number,
    value:Number,
    fecha:Date,
    hora:Date
  },{
    versionKey:false
  });
  static Cervos:any=model('Servos',this.cervoschema)
}
