package com.example.bookingorder.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.jsonschema.JsonSerializableSchema;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Document(collection = "Orders")
public class BookingOrder {

	@Id
	@JsonSerialize(using=ToStringSerializer.class)
	private ObjectId id;
	@NotEmpty(message = "Train id Should not be blank")
	private String trainid;
	@NotEmpty(message = "Train Name Should not be blank")
	private String trainName;
	private int quantity;
	@NotEmpty(message = "User Name Should not be blank")
	private String userName;
	@NotBlank(message="Please mention the Start Station")
	private String startStation;
	@NotBlank(message="Please mention the End Station")
	private String endStation;
	@NotBlank(message = "Date should be mentioned")
	private String date;
	@NotBlank(message = "email address should be mentioned")
	private String email;
	
	public String getTrainid() {
		return trainid;
	}
	public void setTrainId(String trainid) {
		this.trainid = trainid;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getStartStation() {
		return startStation;
	}
	public void setStartStation(String startStation) {
		this.startStation = startStation;
	}
	public String getEndStation() {
		return endStation;
	}
	public void setEndStation(String endStation) {
		this.endStation = endStation;
	}
	
	public ObjectId getId() {
		return id;
	}


	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public void setTrainid(String trainid) {
		this.trainid = trainid;
	}
	
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}
	

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public BookingOrder(ObjectId id, @NotEmpty(message = "Train id Should not be blank") String trainid,
			@NotEmpty(message = "Train Name Should not be blank") String trainName, int quantity,
			@NotEmpty(message = "User Name Should not be blank") String userName,
			@NotBlank(message = "Please mention the Start Station") String startStation,
			@NotBlank(message = "Please mention the End Station") String endStation,
			@NotBlank(message = "Date should be mentioned") String date,
			@NotBlank(message = "email address should be mentioned") String email) {
		super();
		this.id = id;
		this.trainid = trainid;
		this.trainName = trainName;
		this.quantity = quantity;
		this.userName = userName;
		this.startStation = startStation;
		this.endStation = endStation;
		this.date = date;
		this.email = email;
	}
	public BookingOrder() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "BookingOrder [id=" + id + ", trainid=" + trainid + ", trainName=" + trainName + ", quantity=" + quantity
				+ ", userName=" + userName + ", startStation=" + startStation + ", endStation=" + endStation + ", date="
				+ date + ", email=" + email + "]";
	}

}