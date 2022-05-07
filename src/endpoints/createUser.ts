import  { Request, Response } from 'express';
import {v4 as generatedId} from "uuid";
import insertUser from '../data/insertUser';

//função assíncrona que será executada quando o usuário chamar a rota /user
    export default async function createUser(   
        req: Request,
        res: Response
    ) {
//corpo da função envolvido em um bloco try/catch que será executado 
//caso não haja erro e se houver, será executado o catch
    
    try   {

 // validação das entradas da requisição 
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) {
// se não tiver nenhum dos campos, retorna um erro
            res
            .status(400)
            .send("Preenchas os campos, 'name','nickName','email'");
            return
        }
            

     //chamando  o banco de dados
     const id = generatedId();
     // a função await é para esperar o banco de dados executar a função insertUser
     await insertUser (
         id,
        req.body.name,
        req.body.nickname,
        req.body.email
    );
      
     

    //repsonder a requisição 
    res 
        .status(200)
        .send("Usuário criado com sucesso!");


 } catch(error: any) {
    res.status(400).send({
        message:  error.message || error.sqlMessage

//erro for pelo sql , ele me retorna um sql message


    });
    }
}