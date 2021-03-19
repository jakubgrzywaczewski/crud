import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import ROUTES from '../../common/constant';

interface IProps {
  movieIds: string[];
}

const Favourites = (props: IProps) => {
  const { movieIds } = props;
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    axios
      .get(ROUTES.MOVIES_GET_FAVOURITES_API, {
        withCredentials: true,
        params: {
          ids: movieIds,
        },
      })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setFavourites(res.data);
          console.log(res.data);
        }
      });
  }, [movieIds]);

  return <div>favourites</div>;
};

export default Favourites;
