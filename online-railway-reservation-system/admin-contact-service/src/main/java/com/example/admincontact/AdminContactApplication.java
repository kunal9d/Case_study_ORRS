package com.example.admincontact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;

                           // same as @Configuration @EnableAutoConfiguration @ComponentScan
@SpringBootApplication    // is the form of metadata that provide data about the program 
public class AdminContactApplication {


	public static void main(String[] args) {
		SpringApplication.run(AdminContactApplication.class, args);
	}
	@Bean   //It is a method-level annotation. It is an alternative of XML <bean> tag. It tells the method to produce a bean to be managed by Spring Container.
	@LoadBalanced // the process of distributing traffic among different instances of the same application
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}

}
