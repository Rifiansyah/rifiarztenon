import { heroes } from '$db/heroes';
import { ObjectId } from 'mongodb';

export const GET = async ({ params }: {params: {id: string}}) => {
	console.log(params.id);
	try {
		const data = await heroes.findOne({ _id: new ObjectId(params.id) });
		console.log(data);
		if (data == null) {
			return new Response(JSON.stringify({ data: data, message: 'No Content' }), { status: 200 });
		} else {
			return new Response(JSON.stringify({ data: data, message: 'Success' }), { status: 200 });
		}
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ data: [], message: 'Something Went Wrong' }), {
			status: 404
		});
	}
};

export const PUT = async ({ params, request } : {params: {id: string}, request: Request }) => {
	const body = await request.json();
	const authHeader = request.headers.get('Authorization')
	if (authHeader !== import.meta.env.VITE_AUTH_HEADER) {
		return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
	}

	console.log(body);
	try {
		heroes.updateOne({ _id: new ObjectId(params.id) }, { $set: body });
		return new Response(JSON.stringify({ message: 'Success' }), { status: 201 });
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Update Error' }), { status: 404 });
	}
};

export const DELETE = async ({ params, request }: {params: {id: string}, request: Request }) => {
	const authHeader = request.headers.get('Authorization')
	if (authHeader !== import.meta.env.VITE_AUTH_HEADER) {
		return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
	}
	try {
		heroes.deleteOne({ _id: new ObjectId(params.id) });
		return new Response(JSON.stringify({ message: 'Accepted' }), { status: 202 });
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Delete Error' }), { status: 404 });
	}
};
