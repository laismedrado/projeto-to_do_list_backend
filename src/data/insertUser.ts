import { connect } from "..";

//conexão com o banco de dados para inserir um usuário novo na 
//tabela users do banco de dados 
export default async function insertUser (

    id: string,
    name:string,
    nickname:string,
    email:string
) {
//a função await inseri um usuário novo na tabela 
//users do banco de dados
    await connect.insert ({
    id,
    name,
    nickname,
    email

  }).into("to_do_list_users");
  

}