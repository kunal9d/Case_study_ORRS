package com.example.user.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.model.User;
import com.example.user.service.UserService;

@RestController
@RequestMapping("User")
public class UserController {

	@Autowired
	private UserService userService;
	//Create Account
		@PostMapping("createUser")
		public ResponseEntity<String> createCustomer(@Valid @RequestBody  User user) {
			User us = userService.createUser(user);
			return new ResponseEntity<String>("Signup processing!!" , HttpStatus.CREATED);
		}

	//display users by their id
		@GetMapping("display/{id}")
		public ResponseEntity<User> display(@PathVariable("id") String id){
			User us = userService.getUser(id);
			return new ResponseEntity<User>(us , HttpStatus.OK);
		}
		
	//list of all users
		@GetMapping("displayAll")
		public List<User> displayAll(){
			return userService.getAllUser();
		}

}