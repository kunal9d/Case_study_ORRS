package com.example.user.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.user.model.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String> {
	UserModel findByuserName(String userName);
}
