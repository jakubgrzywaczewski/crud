const ROUTES = {
  AUTH: 'http://localhost:5000/auth/google',
  DOMAIN: 'http://localhost:3000',
  GET_USER: 'http://localhost:5000/user',
  LOGOUT_USER: 'http://localhost:5000/auth/logout',
  LOGIN_PAGE: '/login',
  HOME_PAGE: '/',
  MOVIES_PAGE: '/movies',
  MOVIES_TITLE_API: 'http://localhost:5000/movies/search?title=',
  MOVIES_FAVOURITE_API: 'http://localhost:5000/movies/add:id',
  MOVIES_GET_FAVOURITES_API: 'http://localhost:5000/movies/get:ids',
};

const EXTERNAL_URLS = {
  UNKNOWN_URL: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg',
};

export { ROUTES, EXTERNAL_URLS };
