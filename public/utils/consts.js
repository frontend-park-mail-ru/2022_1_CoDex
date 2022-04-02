export const URL = "https://teamprojectkinopoisk.herokuapp.com";
export const englishRegularCheck = /(?=.*[A-z])/;
export const russianRegularCheck = /^[\u0400-\u04FF]+$/;
export const emailRegularCheck = /\S+@\S+\.\S+/;
export const passwordRegularCheck = /^(?=.*[0-9])(?=.*[A-z])[A-zА-я0-9]{8,}$/;
export const numberRegularCheck = /(?=.*[0-9])/;
export const countRegularCheck = /[a-zA-Z]{2,}/;
export const maxMovieShortDescriptionLength = 190;
export const AJAX_METHODS = {
    POST: "POST",
    GET: "GET",
  };
export const OK = 200;
export const NOT_AUTHORIZED = 401;
export const CONFLICT = 404;
export const BAD_REQUEST = 400;
export const FAILED_DEPENDENCY = 423;
export const CREATED = 201;