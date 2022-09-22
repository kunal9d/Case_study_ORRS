package com.example.bookingorderservice;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import test.BookingTest;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = {BookingTest.class})
class BookingOrderServiceApplicationTests {

	@Test
	void contextLoads() {
	}

}
