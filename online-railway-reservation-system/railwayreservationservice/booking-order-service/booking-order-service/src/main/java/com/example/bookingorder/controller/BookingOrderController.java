package com.example.bookingorder.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.bookingorder.model.BookingOrder;
import com.example.bookingorder.service.BookingOrderService;
@RestController
@RequestMapping("Orders")
public class BookingOrderController {
	@Autowired
	private BookingOrderService bookingOrderService;

	@PostMapping("/addOrder")
	public String saveOrder(@Valid@RequestBody BookingOrder order) {
		bookingOrderService.addOrder(order);
	return "Booked ticket with id :  " + order.getId();
    }
	@GetMapping("/{id}")
	public Optional<BookingOrder> getOrder(@PathVariable String id){
		return  bookingOrderService.getOrderbyId(id);
	}
	 @DeleteMapping("/del/{id}")
	 public String deleteOrder (@PathVariable String id) {
		 bookingOrderService.deleteOrder(id);
		return "Order deleted with id : "+id;
		}
	}
