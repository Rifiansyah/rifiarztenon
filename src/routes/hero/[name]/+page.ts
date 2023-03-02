import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
 
export const load = (async ({ fetch, params }) => {
  if ( params.name.length < 6){
    throw error(404, {
      message: 'Not Found'
    });
  }
  const res = await fetch(`/api/heroes/${params.name}`);
  const heroes = await res.json();
  console.log(heroes);
  if(heroes.data.length < 1){
    throw error(404, {
      message: 'Not Found'
    });
  }
  return { heroes };
}) satisfies PageLoad;