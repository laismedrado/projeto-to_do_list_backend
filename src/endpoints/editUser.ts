import {Request, Response} from 'express';

import updateUser from '../data/updateUser';



export default async function editUser(
 req:Request,
 res: Response
){
    try {

        
        if(
                req.body.name === '' || 
                req.body.nickname ==='' || 
                req.body.email === '' 
               
        ){
            res
            .status(400)
            .send("Nenhum dos campos pode estar em branco")
        }
        
        
        
        if(!req.body.name && !req.body.nickname && !req.body.email){
             res
                .status(400)
                .send ({
                    message: "Escolha ao menos um valor para alterar"
                });
         }

              
        //chamando o banco de dados
        await updateUser (
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        //responder a requisição

        res
            .status(200)
            .send({
                message: "Usuário alterado com sucesso!"
        });
          return

    } catch (error:any) {
        res
            .status(400)
            .send({
                message: error.message || error.sqlMessage
        });
        return
    }

}

    
