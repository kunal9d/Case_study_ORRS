package com.example.admincontact.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "Contacts")

public class Admin {

   @Id
   @NotBlank(message = "Admin id should me mentioned")
   @Size(max=6, message="Id should not be more than 6")
   private String id;
   
   @NotBlank(message = "Name should me mentioned")
   private String name;
   
   @NotBlank(message = "PhoneNumber should me mentioned")
   @Size(min=10, max = 10, message="Phone No. Should be of 10 digits")
   private String phoneNumber;
   
   public Admin() {
       
   }


   public Admin(String id, String name, String phoneNumber) {
	super();
	this.id = id;
	this.name = name;
	this.phoneNumber = phoneNumber;
}


   public String getId() {
	return id;
}

   public void setId(String id) {
	this.id = id;
}
   
   public String getName() {
	return name;
}

   public void setName(String name) {
	this.name = name;
}

   public String getPhoneNumber() {
	return phoneNumber;
}

  public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}

   @Override
   public String toString() {
	return "Contact [id=" + id + ", name=" + name + ", phoneNumber=" + phoneNumber + "]";
}

 

}
