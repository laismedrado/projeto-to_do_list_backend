import { connect } from "..";


export default async function iselectUserById (

    id: string
) {
  //essa query devolve um resultado, então crio uma variavel para guarda-lá
    const result = await connect ('to_do_list_users')
       .select ('*')
        //a coluna id, tem que vim de acordo com o parâmetro que é passado
        .where ('id', id)
       
        //indice 0, retorna o objeto em vez dele dentro do array
    return result[0];
  
  }