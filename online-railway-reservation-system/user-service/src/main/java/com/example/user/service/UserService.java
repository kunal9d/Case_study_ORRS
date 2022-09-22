package com.example.user.service;


import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.example.user.model.BookingOrder;
import com.example.user.model.UserModel;
import com.example.user.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	private UserRepository ur;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public UserModel createUser(UserModel user) {	
			return ur.save(user);
	}
	
	public List<UserModel> getAllUser() {
		return ur.findAll();
	}
	
	public UserModel getUser(String id) {
		UserModel u= ur.findById(id).get();
		return u;
	}
	public UserModel findUserByName(String name) {
		UserModel result=ur.findByuserName(name);
		return result;
	}
}
