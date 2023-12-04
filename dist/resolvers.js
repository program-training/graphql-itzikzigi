import { authors, books } from "./db.js";
const resolvers = {
    Query: {
        books: () => books,
        book: async (_, { bookId }) => {
            const selectedBook = books.find((book) => book.id === bookId);
            const author = authors.find((aut) => aut.id === selectedBook.authorId);
            selectedBook.author = author;
            return selectedBook;
        },
        authors: () => authors,
        author: (_, { authorId }) => {
            const author = authors.find((author) => author.id === authorId);
            return author;
        },
    },
    Author: {
        books(parent, _, _context, { variableValues }) {
            const book = books.filter((b) => b.authorId === parent.id && b.id !== variableValues.bookId);
            return book;
        },
    },
    Mutation: {
        createBook: async (_, { input: newBook }) => {
            newBook.bookId = books[books.length - 1].id + 1;
            books.push(newBook);
            return books[books.length - 1];
        },
        editBook: (_, { book: input }) => {
            const bookToEdit = books.findIndex((book) => book.id === input.id);
            if (bookToEdit > -1)
                books[bookToEdit] = { ...books[bookToEdit], ...input };
            return books[bookToEdit];
        },
        deleteBook: (_, { id }) => {
            const index = books.findIndex((book) => book.id === id);
            if (index > -1)
                books.splice(index, 1);
            return books;
        },
    },
};
export default resolvers;
