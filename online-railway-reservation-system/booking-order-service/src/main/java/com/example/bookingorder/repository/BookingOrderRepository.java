package com.example.bookingorder.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.bookingorder.model.BookingOrder;

public interface BookingOrderRepository extends MongoRepository<BookingOrder, String> {
	List<BookingOrder> findByuserName(String userName);
}

