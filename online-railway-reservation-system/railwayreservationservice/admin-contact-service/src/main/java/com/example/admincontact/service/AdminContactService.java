package com.example.admincontact.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.admincontact.model.Admin;
import com.example.admincontact.repositry.AdminContactRepository;

@Service
public class AdminContactService {

	@Autowired
	private AdminContactRepository contactrepository;
	

	public Admin addAdmin (Admin admin) {
		return contactrepository.save(admin);
	}

	public List<Admin> getAdmin() {
		List<Admin> admin = contactrepository.findAll();
		return admin;
	}

	public Optional<Admin> getAdminbyId(String id) {
		return contactrepository.findById(id);
	}

	public void deleteAdmin(String id) {
		contactrepository.deleteById(id);
	}
}

