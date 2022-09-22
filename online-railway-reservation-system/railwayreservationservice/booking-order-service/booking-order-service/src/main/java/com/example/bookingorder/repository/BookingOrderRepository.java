package com.example.bookingorder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.bookingorder.model.BookingOrder;

public interface BookingOrderRepository extends MongoRepository<BookingOrder, String> {}

