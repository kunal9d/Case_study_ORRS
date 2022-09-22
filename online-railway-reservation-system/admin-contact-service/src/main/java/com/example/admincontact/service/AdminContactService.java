package com.example.admincontact.service;

import java.util.*;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.admincontact.exceptions.UserNotFoundException;
import com.example.admincontact.model.Admin;
import com.example.admincontact.model.UserModel;
import com.example.admincontact.repositry.AdminContactRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class AdminContactService {

	@Autowired
	private AdminContactRepository contactRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public Admin createAdmin(Admin admin) {	
			return contactRepository.save(admin);
	}
	
	public List<Admin> getAllAdmin() {
		return contactRepository.findAll();
	}
	
	public Admin getAdmin(String id) {
		Admin ad= contactRepository.findById(id).get();
		return ad;
	}
	public Admin findAdminByName(String name) {
		Admin result=contactRepository.findByuserName(name);
		return result;
	}
	public List<UserModel> getAllUser(){
		UserModel[] forNow = restTemplate.getForObject("http://user-Service/user/displayall", UserModel[].class);
	    List<UserModel> searchList= Arrays.asList(forNow);
	    return searchList;
	}
	
	public String removeAdmin(String username) throws UserNotFoundException {
		if(contactRepository.findByuserName(username)!=null) {
			contactRepository.deleteByuserName(username);
		}
		else {
			throw new UserNotFoundException("No such user exists !");
		}
		return "Admin has been removed!";
	}
}
