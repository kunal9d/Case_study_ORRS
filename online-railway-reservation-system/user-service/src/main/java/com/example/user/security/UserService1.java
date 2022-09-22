package com.example.user.security;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.user.model.UserModel;
import com.example.user.repository.UserRepository;

@Service
public class UserService1 implements UserDetailsService{
	
	@Autowired
	UserRepository userrepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel foundedUser=userrepo.findByuserName(username);
		if (foundedUser==null) {
			return null;
		}
		String user=foundedUser.getUserName();
		String pass=foundedUser.getPassword();
		return new User(user, pass,new ArrayList<>());
	}

}
