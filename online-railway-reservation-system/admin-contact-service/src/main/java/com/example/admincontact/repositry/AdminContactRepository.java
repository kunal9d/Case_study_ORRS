package com.example.admincontact.repositry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.admincontact.model.Admin;

public interface AdminContactRepository extends MongoRepository<Admin, String> {
	Admin findByuserName(String userName);
	void deleteByuserName(String userName);
}

