package com.example.admincontact.security;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.admincontact.model.Admin;
import com.example.admincontact.repositry.AdminContactRepository;
import com.example.admincontact.service.AdminContactService;

@Service
public class MyUserDetailsService implements UserDetailsService{
	
	@Autowired
	AdminContactRepository adminService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin foundedUser=adminService.findByuserName(username);
		if (foundedUser==null) {
			return null;
		}
		String user=foundedUser.getUserName();
		String pass=foundedUser.getPassword();
		return new User(user, pass,new ArrayList<>());
	}

}
