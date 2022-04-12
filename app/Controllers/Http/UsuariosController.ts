// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
export default class UsuariosController 
{
     public async store({auth,request,response})
    {
        const user=new User()
	const nombre=request.input('Nombre')
        const email=request.input('Email')
        const password=request.input('Password')
        user.email=email
        user.password=password
	user.nombre=nombre 
        await user.save()
        return response.status(200)
    }
}
