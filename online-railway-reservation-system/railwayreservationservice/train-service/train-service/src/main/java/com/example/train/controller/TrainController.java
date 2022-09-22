package com.example.train.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.train.model.Train;
import com.example.train.service.TrainService;
import com.example.train.repository.TrainRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/trains")
public class TrainController {
	

	@Autowired
	private TrainService trainService;
	@PostMapping("/addTrain")
	public String saveTrain(@Valid@RequestBody Train train) {
	trainService.addTrain(train);
	return "Added train with id :  " + train.getTrainid();
    }
	
	
	@GetMapping("{trainid}")
	public Optional<Train> getTrain(@PathVariable String trainid){
		return trainService.getTrainbyId(trainid);
	}
	
	
	@DeleteMapping("/delete/{trainid}")
	public String deleteTrain (@PathVariable String trainid) {
		trainService.deleteTrain(trainid);
		return "Train deleted with id : "+trainid;
    }
	
	@PutMapping("/update/{trainid}")
	public Train updateTrain(@PathVariable("trainid") String trainid,@RequestBody Train t ) {
		t.setTrainid(trainid);
		trainService.addTrain(t);
		return t;	
}	
}

