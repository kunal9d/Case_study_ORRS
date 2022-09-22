package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.bookingorder.model.BookingOrder;
import com.example.bookingorder.repository.BookingOrderRepository;
import com.example.bookingorder.service.BookingOrderService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = { BookingTest .class })

public class BookingTest {
	
	@InjectMocks
	private BookingOrderService bookingOrderService;
	@Mock
	private BookingOrderRepository bookingOrderRepository;
	
	@Test
	public void saveTest() {
		BookingOrder booking = new BookingOrder("123","4", "kanpur", "mumbai");
		when(bookingOrderRepository.save(booking)).thenReturn(booking);
		assertEquals(booking,bookingOrderService.addOrder(booking));	
	}

}
