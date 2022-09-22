package com.example.bookingorder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.example.bookingorder.model.BookingOrder;
import com.example.bookingorder.model.Train;
import com.example.bookingorder.repository.BookingOrderRepository;
import java.util.*;

@Service
public class BookingOrderService {
	
	@Autowired
	private BookingOrderRepository bookingOrderRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private EmailService service;
	
	public BookingOrder addOrder (BookingOrder order) {
		Train train=restTemplate.getForObject("http://train-Service/trains/trainbyid/"+ order.getTrainid(), Train.class);
		order.setTrainName(train.getTrainName());
		if(train!=null && train.getSeats()>order.getQuantity()) {
		updateSeats(order);
		return  bookingOrderRepository.save(order);}
		else {
			return null;
		}
	}
	
	public Optional<BookingOrder> getOrder(String id) {
		return bookingOrderRepository.findById(id);
	}
	public void deleteOrder(String id) {
		Optional<BookingOrder> order=getOrder(id);
		updateSeatsAfterCancellation(order);
		bookingOrderRepository.deleteById(id);
	}
	public void updateSeats(BookingOrder book) {
		
		Train train=restTemplate.getForObject("http://train-Service/trains/trainbyid/"+ book.getTrainid(), Train.class);
		train.setSeats(train.getSeats() - book.getQuantity());
		restTemplate.put("http://train-Service/trains/update/", train);			     
	}
	public void updateSeatsAfterCancellation(Optional<BookingOrder> book) {
		
		BookingOrder book1=book.get();
		Train train=restTemplate.getForObject("http://train-Service/trains/trainbyid/"+ book1.getTrainid(), Train.class);
		train.setSeats(train.getSeats() + book1.getQuantity());
		restTemplate.put("http://train-Service/trains/update/", train);			     
	}
	
	public List<BookingOrder> findOrderByName(String name){
		return bookingOrderRepository.findByuserName(name);
	}
	
	public void sendEmail(BookingOrder request) {
		service.sendEmail(request);

	}
}

