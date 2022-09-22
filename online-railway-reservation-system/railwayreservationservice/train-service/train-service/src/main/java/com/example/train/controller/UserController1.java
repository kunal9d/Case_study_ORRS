package com.example.train.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.train.model.*;
import com.example.train.service.TrainService;
import com.example.train.repository.*;


@RestController
@RequestMapping("/search")
public class UserController1 {
	

	@Autowired
	private TrainService trainService;
    @GetMapping("/findAllTrains")
    public List<Train> getTrains(){
	return trainService.getAllTrain();
	
}
    @GetMapping("/findAllTrains/{trainid}")
    public Optional<Train> getTrains(@PathVariable String trainid){
	return trainService.getTrainbyId(trainid);
}
	
}