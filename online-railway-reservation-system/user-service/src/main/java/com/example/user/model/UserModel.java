package com.example.user.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;

@Document(collection="User")
public class UserModel {
	
	
	@Id
	@NotEmpty(message = "Id Should not be blank")
	@Size(max=6, message="Id should not be more than 6")
	private String id;
	
	@NotEmpty(message = "User Name Should not be blank")
	private String userName;
	
	@NotEmpty(message = "Password should be entered properly")
	@Size(min=6, max=20, message="Password length should be between 6 to 20 characters")
	private String password;
	
	@NotEmpty(message = "Gender should be marked")
	private String gender;
	
	@NotEmpty(message = "Phone no. should entered correctly")
	@Size(min=10, max = 10, message="Phone No. Should be of 10 digits" )
	private String phoneNumber;

	public UserModel() {
		
	}
	
	
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	@Override
	public String toString() {
		return "User [Id=" + id + ", userName=" + userName + ", password=" + password + ", gender=" + gender
				+ ", phoneNumber=" + phoneNumber + "]";
	}
	public UserModel(String id, String userName, String password, String gender, String phoneNumber) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.gender = gender;
		this.phoneNumber = phoneNumber;
	}
}

