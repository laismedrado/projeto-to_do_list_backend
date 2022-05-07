import  { Request, Response } from 'express';
import {v4 as generatedId} from "uuid";
import insertTask from '../data/insertTask';
import moment from 'moment';
// o bloco da função envolvido no try catch, que é o que será executado, é o que será executado caso não haja erro.
// o bloco do catch é o que será executado caso haja erro.

export default async function createUser(
    req: Request,
    res: Response
) {
 try   {
     //1-  valida as entradas da requisição 

      if(
         !req.body.title ||
         !req.body.description ||
         !req.body.limitDate ||
         !req.body.author_Id
      ) {
          res
          
           .status(400)
           .send({
                message: "Preenchas os campos, 'title','description,'limitDate','authorId'"
           
           }); 
            return
        }
        //se o prazo expirou 

        const dateDiff: number = moment (req.body.limitDate, 'DD/MM/YYYY').unix() - moment().unix();
    


         if(dateDiff <= 0) {
            res
            .status(400)
            .send({
                message: "Prazo expirado"
            });

                  return
         }
         const id = generatedId();
         await insertTask (
                id, 
                req.body.title,
                req.body.description,
                moment(req.body.limitDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                req.body.author_Id
            );
            res
            .status(200)
            .send({
                message: "Tarefa criada com sucesso!"
            });



        } catch(error: any) {
            res.status(400).send({
                message:  error.message || error.sqlMessage
        
        //erro for pelo sql , ele me retorna um sql message
        
        
            });
            }
        }
