package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.junit.Assert.assertNull;
import java.util.Optional;
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
	public void addAdminTest() {
		Admin admin = new Admin("111", "aanchal","aanchal123" ,"8574063515");
		when(adminContactRepository.save(admin)).thenReturn(admin);
		assertEquals(admin,adminContactService.createAdmin(admin));	
	}
	@Test
	public void findAllAdminTest() {
		when(adminContactRepository.findAll())
		.thenReturn(Stream.of(new Admin("111", "aanchal","aanchal123","9401222895")).collect(Collectors.toList()));
		assertEquals(1, adminContactService.getAllAdmin().size());
	}
	@Test
	public void findAdminByIdTest() {
		String id="123";
		Optional<Admin> adminOpt = Optional.of(new Admin("123", "aanchal","aanchal123","9401222895"));
		when(adminContactRepository.findById(id))
		.thenReturn(adminOpt);
		Admin admin = adminOpt.get();
		assertEquals(admin, adminContactService.getAdmin(id));
	}
	
	@Test
	public void findAdminByNameTest() {
		String userName="aanchal";
		Admin adminOpt = new Admin("123", "aanchal","aanchal123","9401222895");
		when(adminContactRepository.findByuserName(userName))
		.thenReturn(adminOpt);
		assertEquals(adminOpt, adminContactService.findAdminByName(userName));
	}
	
	@Test
	public void deleteByuserNameTest() {
		String userName = "aanchal";
		adminContactRepository.deleteByuserName(userName);
		//assertNull(userName);
		assertNull(adminContactRepository.findByuserName(userName));	
	}
	
}