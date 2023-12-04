interface BookInterface {
  title: string;
  authorId: string;
  author: AuthorInterface;
  id: string;
  genre: string;
}

interface AuthorInterface {
  id: string;
  name: string;
  books: BookInterface[];
}
