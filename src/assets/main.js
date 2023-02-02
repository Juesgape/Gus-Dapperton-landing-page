const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=OLAK5uy_m2rAd0bEELRlm5QFc2n2m3jkBEYzCO5Nk&part=snippet&maxResults=50'

const content = document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2cdf4011bdmsh573d001fd6a6495p1785d3jsn658b5e2b4e46',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async(urlAPI) => {
	try {
		const response = await fetch(urlAPI, options)
		const data = await response.json()

			let view = `
				${data.items.map(video => `
				<div class="group relative">
					<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
						<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
					</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${video.snippet.title}
					</h3>
				</div>
				</div>
				`).slice(0,4).join('')}
			`;
		
		content.innerHTML = view;

	} catch (err) {
		throw new Error(err)
	}
}

fetchData(API)