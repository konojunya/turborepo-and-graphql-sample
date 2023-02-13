import { gql, useQuery } from "@apollo/client";

const query = gql`
  {
    books {
      title
      author
    }
  }
`;

export default function Web() {
  const { loading, error, data } = useQuery(query);

  console.log({ loading, error, data });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {JSON.stringify(error, null, 2)}</p>;

  return (
    <ul>
      {data.books.map((book: any) => (
        <li key={book.title}>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </li>
      ))}
    </ul>
  );
}
