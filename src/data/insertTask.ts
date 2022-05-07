import { connect } from "..";

export default async function insertTask (

    id: string,
    title:string,
    description:string,
    limitDate:string,
    author_Id:string
) {

    await connect.insert ({
        id,
        title,
        description,
        limitDate,
        author_Id
    
    

  }).into("to_do_list_tasks");

}