import {Schema,model} from 'mongoose'
export default class Valore {
  
  static valoresschema=new Schema({
    id:Number,
    fecha:String,
    clave:String,
    hora:String,
    valor:Number
  },{
    versionKey:false
  });
  static Valore:any=model('Valores',this.valoresschema)
}
