import { heroes } from "$db/heroes";

// Create text index outside of the `get` function
heroes.createIndex({ "$**": "text" })

export const GET = async ({ params }) => {
  try {
    const data = await heroes.find({
      $or: [
        { name: { $regex: new RegExp(params.query, "i") } },
        { class: { $regex: new RegExp(params.query, "i") } },
        { element: { $regex: new RegExp(params.query, "i") } },
        { party_buff: { $regex: new RegExp(params.query, "i") } },
        { equipment: { $regex: new RegExp(params.query, "i") } },
        { "normal_attack.description": { $regex: new RegExp(params.query, "i") } },
        { "chain_skill.description": { $regex: new RegExp(params.query, "i") } },
        { "special_ability.description": { $regex: new RegExp(params.query, "i") } },


        // Add more fields as needed
      ]
    }).toArray();
    
    console.log(data)
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.log(error);
  }
}
