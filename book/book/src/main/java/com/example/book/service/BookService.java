package com.example.book.service;

import com.example.book.model.Book;

import java.util.List;

public interface BookService {
    List<Book> getAll();
    Book getBookById(Long id);
    Book saveBook(Book book);
    void deleteBook(Long id);
    Book updateBook(Long id, Book newBook);
}
