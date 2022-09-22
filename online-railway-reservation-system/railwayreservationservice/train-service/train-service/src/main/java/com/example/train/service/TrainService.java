package com.example.train.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.train.model.Train;
import com.example.train.repository.TrainRepository;

@Service
public class TrainService {

	@Autowired
	private TrainRepository trainrepository;
	

	public Train addTrain (Train train) {
		return trainrepository.save(train);
	}

	public List<Train> getTrain() {
		List<Train> train = trainrepository.findAll();
		System.out.println("Getting data from DB : " + train);
		return train;
	}

	public Optional<Train> getTrainbyId(String id) {
		return trainrepository.findById(id);
	}

	public void deleteTrain(String trainid) {
		trainrepository.deleteById(trainid);
	}
	
	public List<Train> getAllTrain() {
		List<Train> train = trainrepository.findAll();
		return train;
	}

	


}
