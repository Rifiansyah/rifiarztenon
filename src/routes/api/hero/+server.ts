import { heroes } from '$db/heroes';

export const GET = async () => {
	return new Response(JSON.stringify('api/hero/:id'), { status: 200 });
};

export const POST = async ({ request }: {request: Request}) => {
	
	const authHeader = request.headers.get('Authorization')
	if (authHeader !== import.meta.env.VITE_AUTH_HEADER) {
		return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
	}

	const body = await request.json();
	console.log(body);
    heroes.insertOne(body)
	return new Response(JSON.stringify({ message: 'Success' }), { status: 201 });
};