package com.example.admincontact;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import com.example.admincontact.model.Admin;
import com.example.admincontact.model.UserModel;
import com.example.admincontact.security.AuthenticationRequest;
import com.example.admincontact.security.AuthenticationResponse;

import static springfox.documentation.builders.PathSelectors.regex;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
	public class SwaggerConfig {

	@Bean
	public Docket api() {//is a builder which is instead to  be the primary interface into the swagger-springmvc framework
        return new Docket(DocumentationType.SWAGGER_2)
        		.ignoredParameterTypes(Admin.class,UserModel.class,AuthenticationRequest.class,AuthenticationResponse.class)
        		.groupName("online railway reservation system")
        		.apiInfo(getInfo())
                .select()
                .paths(regex("/admin.*"))
                .build();
    }
	
	    private ApiInfo getInfo() {
			return new ApiInfoBuilder().title("Admin Service")
					.description("Sample Documentation Generateed Using SWAGGER2 for our Admin Rest API")
					.build();
		}
	    }

