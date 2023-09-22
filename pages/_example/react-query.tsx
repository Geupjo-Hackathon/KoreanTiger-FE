import axios from 'axios';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

type Peron = {
  name: string;
};

export default function ReactQueryExample() {
  const { isLoading, error, data } = useQuery<Peron, Error>('hello', () =>
    axios.get('http://localhost:3000/v5/api/hello').then((res) => res.data),
  );

  console.log('query', data);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h3>React query - {data?.name}</h3>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
