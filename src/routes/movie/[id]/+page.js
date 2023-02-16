export async function load({ fetch, params }) {
	const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=97115eac9634581b25d5ae6cbf398378&language=en-US`
	);
	const data = await res.json();
	// console.log(data);
	// if (res.ok) {
	// 	return {
	// 		props: { movieDetail: data}
	// 	};
	// }
    return data;
}
