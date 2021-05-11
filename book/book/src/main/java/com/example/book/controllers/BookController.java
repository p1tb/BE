package com.example.book.controllers;

import com.example.book.model.Book;
import com.example.book.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(BookController.API_URL)
public class BookController {
    public static final String API_URL = "/api/book";
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getBooks(){
        return this.bookService.getAll();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id){
        return this.bookService.getBookById(id);
    }

    @PostMapping("/create")
    public Book saveBook(@RequestBody Book c){
        return this.bookService.saveBook(c);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBook(@PathVariable Long id){
        this.bookService.deleteBook(id);
    }

    @PutMapping("/update/{id}")
    public void updateBook(@PathVariable Long id, @RequestBody Book c){
        this.bookService.updateBook(id, c);
    }
}


