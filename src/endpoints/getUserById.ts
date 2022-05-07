import  { Request, Response } from 'express';
import {v4 as generatedId} from "uuid";
import selectUserById from '../data/selectUserById';

// o bloco da função envolvido no try catch, que é o que será executado, é o que será executado caso não haja erro.
// o bloco do catch é o que será executado caso haja erro.

export default async function getUserById(
    req: Request,
    res: Response
) {
 try   {

    const user = await selectUserById (req.params.id); //consultei o banco 

    ///validar as saídas

     if( !user ) {
            res
            .status(404)
            .send({
                message: "Usuário não encontrado"
        })

        return
    }
    
    //responder a requsição
            res
            .status(200)
            .send({  //coloquei o que quero no body de resposta
                id:user.id,  
                nickname:user.nickname
        });

    } catch(error: any) {
        res.status(400).send({
            message:  error.message || error.sqlMessage

    });
    }
}


        
      