package com.example.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.user.model.User;
import com.example.user.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository ur;
	
	public User createUser(User user) {	
		/*
		 * String id = user.getId(); String userName = user.getUsername(); String
		 * password = user.getPassword(); String phoneNumber = user.getPhoneNumber();
		 * String gender = user.getGender(); List<User> user1 = getAllUser(); long count
		 * = 0; count = user1.stream().filter((i) -> i.getId() == user.getId()).count();
		 */
			return ur.save(user);
	}
	
	public List<User> getAllUser() {
		return ur.findAll();
	}
	
	public User getUser(String id) {
		User u= ur.findById(id).get();
		return u;
	}
}
