import { heroes } from '$db/heroes';


export const GET = async () => {
	return new Response(JSON.stringify('api/hero/:id'), { status: 200 });
};

export const POST = async ({ request }) => {
	const body = await request.json();
	console.log(body);
    heroes.insertOne(body)
	return new Response(JSON.stringify({ message: 'Success' }), { status: 201 });
};