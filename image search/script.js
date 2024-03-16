const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const nextBtn = document.getElementById('next-btn');
const generatedImage = document.getElementById('generated-image');

let currentPage = 1;
let currentQuery = '';


function fetchImages(query, page) {
  const accessKey = 'ifj7rmlF1S3uAH_aGSu0gWiKr5zHCyWASjo7InEEnjk'; 
  const perPage = 1; 
  
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.results[0].urls.regular;
      generatedImage.src = imageUrl;
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}

// Event listener for search button
searchBtn.addEventListener('click', () => {
  currentQuery = searchInput.value.trim();
  currentPage = 1;
  fetchImages(currentQuery, currentPage);
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
  if (currentQuery) {
    currentPage++;
    fetchImages(currentQuery, currentPage);
  }
});
