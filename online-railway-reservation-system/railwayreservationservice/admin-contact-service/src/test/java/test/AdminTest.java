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

import com.example.admincontact.model.Admin;
import com.example.admincontact.repositry.AdminContactRepository;
import com.example.admincontact.service.AdminContactService;



@RunWith(SpringRunner.class)
@SpringBootTest(classes = { AdminTest .class })
public class AdminTest {
	
	@InjectMocks
	private AdminContactService adminContactService;
	@Mock
	private AdminContactRepository adminContactRepository;
	
	@Test
	public void saveAdminTest() {
		Admin admin = new Admin("123","priyanshu", "8574963515");
		when(adminContactRepository.save(admin)).thenReturn(admin);
		assertEquals(admin,adminContactService.addAdmin(admin));	
	}
	@Test
	public void displayAllAdmin() {
		when(adminContactRepository.findAll())
		.thenReturn(Stream.of(new Admin("123","Priyanshu","9451222895")).collect(Collectors.toList()));
		assertEquals(1, adminContactService.getAdmin().size());
	}


}
