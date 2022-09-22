package com.example.admincontact.controller;

import java.util.List;
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

import com.example.admincontact.model.Admin;
import com.example.admincontact.repositry.AdminContactRepository;
import com.example.admincontact.service.AdminContactService;

@RestController
@RequestMapping("/Admin")
public class AdminContactController {
	
	@Autowired
	private AdminContactService adminContactService;
	@PostMapping("/addAdmin")
	public String saveBook(@Valid@RequestBody Admin admin) {
	adminContactService.addAdmin(admin);
	return "Added admin with id :  " + admin.getId();
}
	
	@GetMapping("/findAllAdmin")
	public List<Admin> getAdmin(){
		return adminContactService.getAdmin();
		
		
	}
	@GetMapping("/findAllAdmin/{id}")
	public Optional<Admin> getAdmin(@PathVariable String id){
		return adminContactService.getAdminbyId(id);
	}
	
	 @DeleteMapping("/delAdmin/{id}")
		public String deleteAdmin (@PathVariable String id) {
		 	adminContactService.deleteAdmin(id);
			return "Admin deleted with id : "+id;
		}
	}
