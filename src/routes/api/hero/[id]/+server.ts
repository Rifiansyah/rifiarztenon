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
	console.log(body);
	try {
		heroes.updateOne({ _id: new ObjectId(params.id) }, { $set: body });
		return new Response(JSON.stringify({ message: 'Success' }), { status: 201 });
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Update Error' }), { status: 404 });
	}
};

export const DELETE = async ({ params }: {params: {id: string} }) => {
	try {
		heroes.deleteOne({ _id: new ObjectId(params.id) });
		return new Response(JSON.stringify({ message: 'Accepted' }), { status: 202 });
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Delete Error' }), { status: 404 });
	}
};
