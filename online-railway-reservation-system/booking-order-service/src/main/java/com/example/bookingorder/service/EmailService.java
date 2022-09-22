package com.example.bookingorder.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import com.example.bookingorder.model.BookingOrder;
import com.example.bookingorder.model.MailRequest;
import com.example.bookingorder.model.MailResponse;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender sender;
	
	
	public void sendEmail(BookingOrder request) {
		MimeMessage message = sender.createMimeMessage();
		try {
			// set mediaType
			MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
					StandardCharsets.UTF_8.name());

			helper.setTo(request.getEmail());
			helper.setText("Ticket is booked with ticket id " +request.getId()+" from "
					+request.getStartStation()+" to "+request.getEndStation()+ " on "+
					request.getDate()+"\n"+" Happy journey!! ");
			helper.setFrom("kunaldixit8r@gmail.com.com");
			sender.send(message);

		} catch (MessagingException e) {
		}
		
	}
	

}
