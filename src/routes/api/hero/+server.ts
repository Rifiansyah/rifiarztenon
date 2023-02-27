import { heroes } from "$db/heroes";

let data

export const GET = async ({ query }) => {
  if (query){
    heroes.createIndex({ "$**": "text" })
    data = await heroes.find({
      $or: [
        { name: { $regex: new RegExp(query, "i") } },
        { class: { $regex: new RegExp(query, "i") } },
        { element: { $regex: new RegExp(query, "i") } },
        { party_buff: { $regex: new RegExp(query, "i") } },
        { equipment: { $regex: new RegExp(query, "i") } },
        { "normal_attack.description": { $regex: new RegExp(query, "i") } },
        { "chain_skill.description": { $regex: new RegExp(query, "i") } },
        { "special_ability.description": { $regex: new RegExp(query, "i") } },


        // Add more fields as needed
      ]
    }).toArray();
  }else{
    data = await heroes.find({}).toArray();
  }
  try {
    
    console.log(data)
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.log(error);
  }
}


// export const POST = async ({ request }) => {
//   const body = await request.json()
//   const authHeader = request.headers.get('Authorization')


//   if (authHeader !== 'Myauthheader') {
//     return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
//   }

//   console.log(body)

//   return new Response(JSON.stringify({message: "Success"}), { status: 201 })
// }