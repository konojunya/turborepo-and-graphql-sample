import { gql, useQuery } from "@apollo/client";
import { Book } from "../types/generated/graphql";

const query = gql`
  {
    books
  }
`;

export default function Web() {
  const { loading, error, data } = useQuery<{ books: Book[] }>(query);

  if (loading || data == null) return <p>loading...</p>;
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
