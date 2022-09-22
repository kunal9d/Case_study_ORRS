package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.user.model.User;
import com.example.user.repository.UserRepository;
import com.example.user.service.UserService;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = { UserTest .class })
public class UserTest {
	
	@InjectMocks
	private UserService userService;
	@Mock
	private UserRepository userRepository;
	@Test
	public void displayAllTest() {
		when(userRepository.findAll())
		.thenReturn(Stream.of(new User("123","Priyanshu","abcdefg","m","9451222895")).collect(Collectors.toList()));
		assertEquals(1, userService.getAllUser().size());
	}
}
