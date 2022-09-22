package com.example.bookingorder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookingorder.model.BookingOrder;
import com.example.bookingorder.repository.BookingOrderRepository;
import java.util.*;

@Service
public class BookingOrderService {
	
	@Autowired
	private BookingOrderRepository bookingOrderRepository;
	
	
	public BookingOrder addOrder (BookingOrder order) {
		return  bookingOrderRepository.save(order);
		
	}
	
	public Optional<BookingOrder> getOrderbyId(String id) {
		return bookingOrderRepository.findById(id);
	}
	public void deleteOrder(String id) {
		bookingOrderRepository.deleteById(id);
	}

}

