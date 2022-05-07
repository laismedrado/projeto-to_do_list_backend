import { connect } from "..";


export default async function selectTaskById (

    id: string
) {
  //essa query devolve um resultado, então crio uma variavel para guarda-lá
    const result = await connect.raw ( `
        SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
        JOIN to_do_list_users  AS users 
        ON author_id = users.id
        WHERE tasks.id = '${id}';
     
  `     
)
    return result[0][0];
  //vou está retornando somente o objeto, em vez de retorná-lo dentro do array
 }