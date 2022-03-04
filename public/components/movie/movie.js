import { createElementFromHTML } from "../../utils/utils.js";

export function createMovie(input) {

    let params = {
        input
    };

    const template = createElementFromHTML(movie(params));

    let { movieHref, imgHref, title, info, rating, description} = movieElement;
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie_container");
    

    const movie = document.createElement("div");
    movie.classList.add("movie");
    movieContainer.appendChild(movie);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("movie_image");
    movie.appendChild(imageDiv);

    const imageA = document.createElement("a");
    imageA.classList.add("movie_image");
    imageA.href = `${ movieHref }`;
    imageDiv.appendChild(imageA);

    const image = document.createElement("img");
    image.src = `${ imgHref }`;
    imageA.appendChild(image);

    const movieBody = document.createElement("div");
    movieBody.classList.add("movie_body");
    movie.appendChild(movieBody);

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie_info");
    movieBody.appendChild(movieInfo);

    const movieData = document.createElement("div");
    movieData.classList.add("movie_data");
    movieInfo.appendChild(movieData);

    const movieTitle = document.createElement("a");
    movieTitle.classList.add("movie_title");
    movieTitle.href = `${ movieHref }`;
    movieTitle.textContent = `${ title }`;
    movieData.appendChild(movieTitle);

    const movieInfoSeparator = document.createElement("div");
    movieInfoSeparator.classList.add("movie_add_info");
    movieData.appendChild(movieInfoSeparator);

    const movieGenres = document.createElement("div");
    movieGenres.classList.add("movie_add_info");
    movieGenres.textContent = `${ info }`;
    movieData.appendChild(movieGenres);

    const movieRating = document.createElement("div");
    movieRating.classList.add("movie_rating");
    movieInfo.appendChild(movieRating);

    const movieRatingLabel = document.createElement("div");
    movieRatingLabel.classList.add("movie_text");
    movieRatingLabel.textContent = "Рейтинг";
    movieRating.appendChild(movieRatingLabel);

    const movieRatingNumberDiv = document.createElement("div");
    movieRating.appendChild(movieRatingNumberDiv);

    const movieRatingNumber = document.createElement("div");
    movieRatingNumber.classList.add("movie_rating_number");
    movieRatingNumber.textContent = `${ rating }`;
    movieRating.appendChild(movieRatingNumber);

    const movieDescription = document.createElement("div");
    movieDescription.classList.add("movie_description");
    movieDescription.textContent = `${ description }`;
    movieBody.appendChild(movieDescription);

    return movieContainer;
}
