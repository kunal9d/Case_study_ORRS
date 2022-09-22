package com.example.user.controller;

import java.util.List;

import java.util.Objects;
import javax.validation.Valid;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import com.example.user.exceptions.UserNotFoundException;
import com.example.user.model.BookingOrder;
import com.example.user.model.UserModel;
import com.example.user.security.AuthenticationRequest;
import com.example.user.security.AuthenticationResponse;
import com.example.user.security.JwtUtil;
import com.example.user.security.UserService1;
import com.example.user.service.UserService;
import com.example.user.util.CustomMessage;
import com.example.user.util.MessageListener;
import com.example.user.util.MqConfig;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	private UserService1 userServe;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtTokenUtil;
	@Autowired
	private MessageListener message;
	Logger logger= org.slf4j.LoggerFactory.getLogger(UserController.class);
	
	//Create Account
		@PostMapping("createuser")
		public ResponseEntity<AuthenticationResponse> createCustomer(@Valid @RequestBody UserModel user) {
			UserModel userModel=new UserModel();
			UserModel oldusermodel=new UserModel();
			oldusermodel=userService.findUserByName(user.getUserName());				
				if (!Objects.isNull(oldusermodel) && oldusermodel.getUserName().equals(user.getUserName()) ) {
					
					return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
							("Please Select Unique Username!! ") , HttpStatus.OK);
				}
				else {
			userModel.setId(user.getId());
			userModel.setUserName(user.getUserName());
			userModel.setPassword(user.getPassword());
			userModel.setGender(user.getGender());
			userModel.setPhoneNumber(user.getPhoneNumber());
			try {
				userService.createUser(userModel);
			}
			catch(Exception e){
				return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
						(" Error during singup ") , HttpStatus.OK);
			}
			logger.info("-----------------------User Created-------------------");
			return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
					("Successful singup for client " +user.getUserName()), HttpStatus.OK);
		}}

	//display users by their id
		@GetMapping("display/{id}")
		public ResponseEntity<UserModel> display(@PathVariable("id") String id){
			UserModel us = userService.getUser(id);
			logger.info("-----------------------User display by id-------------------");
			return new ResponseEntity<UserModel>(us , HttpStatus.OK);
		}
		
		
		//for login
		@PostMapping("/auth")
		private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authreq){
			String username=authreq.getUsername();
			String password= authreq.getPassword();
			try {
				authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
					
			}
			catch(Exception e) {
				return ResponseEntity.ok(new AuthenticationResponse(" Invalid Credentials..!"));
			}
			
			UserDetails userdetails= userServe.loadUserByUsername(username);
			
			String jwt = jwtTokenUtil.generateToken(userdetails);
			logger.info("-----------------------User login successfull-------------------");
			return ResponseEntity.ok(new AuthenticationResponse(jwt));
		}
		
		@RequestMapping("/getuser/{username}")
		public UserModel getUser(@PathVariable String username) throws UserNotFoundException {
			logger.info("-----------------------User fetched by username --------------------");
			return userService.findUserByName(username);
		}
		@GetMapping("/displayall")
		public List<UserModel> displayAllUser(){
			logger.info("----------------------- All User -------------------");
			return userService.getAllUser();
		}
		
//		@GetMapping("/notifications")
////	    @RabbitListener(queues = MqConfig.QUEUE)
//	    public ResponseEntity<CustomMessage> message(CustomMessage cm) {
//			CustomMessage sms=message.listener(cm);
//			return new ResponseEntity<CustomMessage>(sms, HttpStatus.OK);
//	    }

		@GetMapping(value = "/notification", produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity <List<String>> getnNotification() {
			return ResponseEntity.ok (MessageListener.getMessageList());
}}