import  { Request, Response } from 'express';
import {v4 as generatedId} from "uuid";
import selectTaskById from '../data/selectTaskById';
import selectUserById from '../data/selectUserById';
import moment from 'moment';

// o bloco da função envolvido no try catch, que é o que será executado, é o que será executado caso não haja erro.
// o bloco do catch é o que será executado caso haja erro.

export default async function getTaskById(
    req: Request,
    res: Response
) {
 try   {

    const result = await selectTaskById (req.params.id); //consultei o banco 

    ///validar as saídas
     if( !result ) {
            res
            .status(200)
            .send({
                message: "Tarefa não encontrada"})
        

        return
    }
     //responder a requsição
            res
            .status(200)
            .send({
             id:result.id,
             title: result.title,
             description: result.description,
             limitDate: moment(result.limitDate, 'YYYY-MM-DD').format('DD/MM/YYYY'),
             status: result.status,
             author_Id: result.author_Id})    

    } catch(error: any) {
        res.status(400).send({
            message:  error.message || error.sqlMessage

    });
    }
}


        
      