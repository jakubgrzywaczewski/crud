import React from 'react';

interface IProps {
  url: string;
}

const Poster: React.FC<IProps> = (props: IProps) => {
  const { url } = props;

  return url ? (
    <figure>
      <img src={url} width="200" height="200" alt="Poster" />
    </figure>
  ) : null;
};
export default Poster;
