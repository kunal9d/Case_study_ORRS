//package com.example.bookingorder.security;
//
//import java.util.ArrayList;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//import com.example.bookingorder.model.UserModel;
//@Service
//public class UserService1 implements UserDetailsService{
//	
//	@Autowired
//	private RestTemplate restTemplate;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		UserModel foundedUser = restTemplate.getForObject("http://user-Service/getUser/" + username, UserModel.class);
//
//		if (foundedUser==null) {
//			return null;
//		}
//		String user=foundedUser.getUserName();
//		String pass=foundedUser.getPassword();
//		return new User(user, pass,new ArrayList<>());
//	}
//
//}
