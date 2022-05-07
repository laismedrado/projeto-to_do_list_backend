import  express, {application, Express } from 'express';
import  createUser  from './endpoints/createUser';
import createTask  from './endpoints/createTask';
import getUserById from './endpoints/getUserById';
import getTaskById from './endpoints/getTaskById';
import editUser from './endpoints/editUser';
import connection from "./connection";




const app: Express = express()
export const connect= connection()
app.use(express.json()) // para transformar o body da resposta em um  formato json e 
//não em uma string e exibir 
//no navegador 


app.put('/user', createUser) // dois argumentos, o caminho e um handler que é a função que será executada;
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)
app.post("/task", createTask)
app.get("/task/:id", getTaskById)

app.listen(3003, () => {
    console.log("Listening on port 3003");

})

























// //6- - **Pegar todos os usuários** **Método:** GET **Path:** `/user/all` **Body de Resposta:**

// app.get("/user/all", async (req: Request, res: Response) => {
//     try {

//         const result = await connection ("User").select("*");
//         res.status(200).send(result);
//     } catch (error: any) {
//         res.status(500).send(error.sqlMessage || error.message);
//       }
// });

// //1-  - **Criar usuário** **Método:** POST **Path:** `/user` **Body:**


// app.post("/user", async (req: Request, res: Response): Promise<void> => {
//     try {


//         await connection("User").insert({
//             id:generatedId (),
//             name: req.body.name,
//             nickName: req.body.nickName,
//             email: req.body.email
//           });
      
//  res.status(200).send("usuário cadastrado com sucesso");   

//  } catch (error: any) {
//    res.status(500).send(error.sqlMessage || error.message);
//  }
// });



// //2-  Pegar usuário pelo id** / Método:** GET
   
// app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
//     try {
//         const result = await connection ("User").where("id", req.params.id).select("*");
//         res.status(200).send(result);
//       } catch (error: any) {
//         res.status(500).send(error.sqlMessage || error.message);
//       }
// });
     
  




//   //3- -  Editar usuário** **Método:** PUT **Path:** `/user/edit/:id` *Path Param**: é o id do usuário

//     app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
//         try {
//            await connection("User").where("id", req.params.id).update({
//             name: req.body.name,
//             nickName: req.body.nickName,
//             email: req.body.email
//             });

//             res.status(200).send("usuário editado com sucesso");
//         } catch (error: any) {
//             res.status(500).send(error.sqlMessage || error.message);
//         }
//     });


// //4- - CRIAR TAREFA**Método:** POST **Path:** `/task` **Body:**
//     app.post("/task", async (req: Request, res: Response): Promise<void> => {
//         try {
//             await connection("Task").insert({
//                 id: generatedId(),
//                 title: req.body.title,
//                 description: req.body.description,
//                 limitDate: req.body.limitDate,
//                 creatorUserId: generatedId(),
//                 status: req.body.status,
//                 creatorUserNickname: req.body.creatorUserNickname
//             });
//             res.status(200).send("tarefa cadastrada com sucesso");
//         } catch (error: any) {
//             res.status(500).send(error.sqlMessage || error.message);
//         }
//     });

// //5- - Pegar tarefa pelo id**Método:** GET **Path:** `/task/:id`
//     app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
//         try {
//             const result = await connection("Task").where("id", req.params.id).select("*");
//             res.status(200).send(result);
//         } catch (error: any) {
//             res.status(500).send(error.sqlMessage || error.message);
//         }
//     });




// //7- **Pegar tarefas criadas por um usuário****Método:** GET**Path:** `/task?creatorUserId=id`**Query String:** indica o id do usuário que criou através da chave `creatorUserId`

// app.get("/task/creatorUserId ", async (req: Request, res: Response): Promise<void> => {
//     try {
//         const result = await connection("Task").where("creatorUserId", req.params.creatorUserId).select("*");
//         res.status(200).send(result);
//     } catch (error: any) {
//         res.status(500).send(error.sqlMessage || error.message);
//     }
// });



// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//        const address = server.address() as AddressInfo;
//        console.log(`Server is running in http://localhost: ${address.port}`);
//     } else {
//        console.error(`Failure upon starting server.`);
//     }
// });


// //eu não posso ter o mesmo usuário fazendo a mesma tarefa;
// //mas posso ter a mesma tarefa co vários usuários diferentes;