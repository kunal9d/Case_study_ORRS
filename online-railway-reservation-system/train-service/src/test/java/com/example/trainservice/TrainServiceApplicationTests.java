package com.example.trainservice;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import test.TrainTest;



@RunWith(SpringRunner.class)
@SpringBootTest(classes = {TrainTest.class})
class TrainServiceApplicationTests {

	@Test
	void contextLoads() {
	}

}
