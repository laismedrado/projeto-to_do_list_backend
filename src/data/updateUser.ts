import { connect } from "..";

export default async function updateUser (

    id: string,
    name?: string,
    nickname?: string,
    email?: string

) {
      if(name){
        await connect ('to_do_list_users')
        .update ('name', name)
        .where ('id', id);
      }
      if(nickname){
        await connect ('to_do_list_users')
        .update ('nickname', nickname)
        .where ('id', id);
      }
      if(email){
        await connect ('to_do_list_users')
        .update ('email', email)
        .where ('id', id);
      }

  }
    