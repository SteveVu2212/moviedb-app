export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=97115eac9634581b25d5ae6cbf398378&language=en-US&query=${params.id}&page=1&include_adult=false`
	);
	const data = await res.json();
	console.log(data.results);
	// if (res.ok) {
	// 	return {
	// 		props: { popular: data.results }
	// 	};
	// }
	return data;
}
