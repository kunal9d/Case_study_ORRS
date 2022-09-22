//package com.example.bookingorder.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//
//
//@Configuration
//@EnableWebSecurity
//@EnableWebMvc
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
//	
//	@Autowired
//	JwtRequestFilter jwtfilter;
//	
//	@Autowired
//	private UserService1 userservice;
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		
//		auth.userDetailsService(userservice);
//	}
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		
//		http.csrf().disable().authorizeRequests().antMatchers("/Orders/getOrder/{userName}"
//				,"/v3/api-docs/**","/v2/api-docs/**",
//				"/swagger-ui/**","/swagger-resources/**",
//				"/webjars/**")
//		.permitAll().anyRequest().authenticated();
//		http.addFilterBefore(jwtfilter, UsernamePasswordAuthenticationFilter.class);
//	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		
//		return NoOpPasswordEncoder.getInstance();
//	}
//
//	@Override
//	@Bean
//	public AuthenticationManager authenticationManagerBean() throws Exception{
//		return super.authenticationManagerBean();
//	}
//}
