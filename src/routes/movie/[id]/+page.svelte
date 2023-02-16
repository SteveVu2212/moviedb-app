<script>
	export let data;
	// console.log(data);
</script>

<div class="movie-details">
	<div class="img-container">
		<img src={'https://image.tmdb.org/t/p/original' + data.backdrop_path} alt={data.title} />
	</div>
	<div class="txt-container">
		<h1>{data.title}</h1>
		<p class="overview">{data.overview}</p>
		<p>
			<span>Release date: </span>
			{data.release_date} <br />
			<span>Budge:</span> ${data.budget} <br />
			<span>Rating:</span>
			{data.vote_average} <br />
			<span>Runtime:</span>
			{data.runtime}mins
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}

	p {
		padding: 1rem 0rem;
	}

	.img-container {
		width: 100%;
	}

	img {
		width: 100%;
		border-radius: 1rem;
	}

	.movie-details {
		margin: 2rem 20%;
	}

	.span {
		font-weight: bold;
	}
</style>
