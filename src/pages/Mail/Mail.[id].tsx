import { useParams } from 'react-router-dom';

const Mail = () => {
  const { id } = useParams();
  console.log('id: ', id);

  return <h1>Mail detail id :: {id}</h1>;
};

export default Mail;
