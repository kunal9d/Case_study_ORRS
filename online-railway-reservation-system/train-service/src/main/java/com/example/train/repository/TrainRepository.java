package com.example.train.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.train.model.Train;

public interface TrainRepository extends MongoRepository<Train, String> {

}
