import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../api';
import Loading from '../Components/Ajuda/Loading';
import useFetch from '../Hooks/useFetch';
import PhotoContent from './PhotoContent';
import Erro from '../Components/Ajuda/Erro';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
    console.log('o id é', id);
  }, [request, id]);

  if (error) return <Erro error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} />
      </section>
    );
  else return null;
};

export default Photo;
