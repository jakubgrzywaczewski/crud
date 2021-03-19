export interface IUser {
  __v: number;
  _id: string;
  favourites: string[];
  googleId: string;
  username: string;
}

export interface IMovie {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    },
  ];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
}
