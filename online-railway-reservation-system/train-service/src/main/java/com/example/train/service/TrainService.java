package com.example.train.service;

import java.util.Date;
import java.util.List;

import java.util.Optional;
import java.util.UUID;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.train.model.Train;
import com.example.train.repository.TrainRepository;
import com.example.train.util.CustomMessage;
import com.example.train.util.MqConfig;

@Service
public class TrainService {

	@Autowired
	private TrainRepository trainRepository;
	
	@Autowired
    private RabbitTemplate template;
	

	public Train addTrain (Train train) {
		return trainRepository.save(train);
	}

	public List<Train> getTrain() {
		List<Train> train = trainRepository.findAll();
		System.out.println("Getting data from DB : " + train);
		return train;
	}

	public Optional<Train> getTrainbyId(String id) {
		return trainRepository.findById(id);
	}

	public void deleteTrain(String trainid) {
		trainRepository.deleteById(trainid);
	}
	
	public List<Train> getAllTrain() {
		List<Train> train = trainRepository.findAll();
		return train;
	}

	public void updateTrain(Train trainDetails) {
		trainRepository.save(trainDetails);
		
	}
	public void publishMessage(String trainId,String source,String destination) {
		CustomMessage message=new CustomMessage();
        message.setMessageId(UUID.randomUUID().toString());
        message.setMessage("New Train is added with train id "+trainId +" from "+source +" to "+destination+" ");
        message.setMessageDate(new Date());
        template.convertAndSend(MqConfig.EXCHANGE,
                MqConfig.ROUTING_KEY, message);

    }

}
