package com.example.train.controller;

import java.util.*;

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
import org.slf4j.Logger;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/trains")
public class TrainController {

	@Autowired
	private TrainService trainService;

	Logger logger = org.slf4j.LoggerFactory.getLogger(TrainController.class);

	@PostMapping("/addtrain")
	public String saveTrain(@Valid @RequestBody Train train) {
		trainService.addTrain(train);
		trainService.publishMessage(train.getTrainid(), train.getStartStation(), train.getEndStation());
		logger.info("----------------------New Train Added-------------------");
		return "Added train with id :  " + train.getTrainid();
	}

	@GetMapping("trainbyid/{trainid}")
	public Optional<Train> getTrain(@PathVariable String trainid) {
		logger.info("-----------------------Train Details fetched by entering train id-------------------");
		return trainService.getTrainbyId(trainid);
	}

	@DeleteMapping("/delete/{trainid}")
	public String deleteTrain(@PathVariable String trainid) {
		trainService.deleteTrain(trainid);
		logger.info("-----------------------Train Deleted-------------------");
		return "Train deleted with id : " + trainid;
	}

	@PutMapping("/update")
	public Train updateTrain(@RequestBody Train t) {
		logger.info("-----------------------Train Information Updated-------------------");
		trainService.updateTrain(t);
		return t;
	}

	@GetMapping("/findalltrains")
	public List<Train> getTrains() {
		logger.info("----------------------All available trains are displayed-------------------");
		return trainService.getAllTrain();

	}

}
