// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
export default class UsuariosController 
{
     public async store({auth,request,response})
    {
        try{
        const user=new User()
	const nombre=request.input('nombre')
        const email=request.input('email')
        const password=request.input('password')
        user.email=email
        user.password=password
	user.nombre=nombre 
        await user.save()
        return response.status(200)
        }
        catch{
                return response.badRequest('Hubo un error')
        }
    }
}
