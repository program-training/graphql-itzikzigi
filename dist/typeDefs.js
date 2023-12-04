const typeDefs = `#graphql

enum Genre{ 
Mystery
Fantasy
Classic 
Fiction
}

type Author{
  id:ID!
  name:String!
  books:[Book]
}

  type Book {
    title: String!
    authorId: ID!
    author:Author!
    id: ID!
    genre:Genre!
  }

  type Query{ 
    books: [Book!]
    book(bookId:ID!):Book!
    authors:[Author]
    author(authorId:ID!):Author!
    }

    type Mutation{
    createBook(input:NewBookInput!):Book!
    editBook(book:EditBookInput!):Book!
    deleteBook(id:ID):[Book]
  }

  input NewBookInput{
    title: String!
    author: String!
    genre:String!
  }

  input EditBookInput{
    id:ID!
    title: String
    author: String
    genre:String
  }

`;
export default typeDefs;
