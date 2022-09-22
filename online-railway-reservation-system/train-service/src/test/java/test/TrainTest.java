package test;

import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import com.example.train.model.Train;
import com.example.train.repository.TrainRepository;
import com.example.train.service.TrainService;



@RunWith(SpringRunner.class)
@SpringBootTest(classes = { TrainTest .class })
public class TrainTest {


	@InjectMocks
	private TrainService trainService;
	@Mock
	private TrainRepository trainRepository;
	
	@Test
	public void getTrainTest() {
		when(trainRepository.findAll())
		.thenReturn(Stream.of(new Train("123","abcd", "kannauj", "Lucknow",60,"19-08-2022")).collect(Collectors.toList()));
		assertEquals(1, trainService.getTrain().size());
	}
	
	@Test
	public void trainByIdTest() {
		String trainid="123";
		Optional<Train> trainOpt = Optional.of(new Train("123","raj", "kannauj", "Lucknow",60,"19-08-2022"));
		when(trainRepository.findById(trainid))
		.thenReturn(trainOpt);
		Train train = trainOpt.get();
		assertEquals(train, trainService.getTrainbyId(trainid));
	}
	
	@Test
	public void deleteByIdTest() {
		String trainid = "123";
		trainRepository.deleteById(trainid);
		//assertNull(id);
		assertNull(trainRepository.findById(trainid));	
	}
	
}