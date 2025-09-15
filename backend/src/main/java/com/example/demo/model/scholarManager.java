package com.example.demo.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.example.demo.model.repository.UserRepo;
import com.example.demo.model.repository.scholarRepo;

@Service
public class scholarManager {
	
	@Autowired
	scholarRepo SR;
	
	@Autowired
    private UserRepo UR; // Repository for fetching user 

    @Autowired
    private JavaMailSender mailSender;

	
	public String addscholarInfo(scholarInfo SI) {
		SR.save(SI);
		
		List<String> userEmails = UR.findAllEmails();
		sendEmails(userEmails, SI);

		return "Added new scholar details and email notifications sent.";
	}
	
	public List<scholarInfo> getdata()
	{
		return SR.findAll();
	}
	@Async
    private void sendEmails(List<String> recipients, scholarInfo scholarship) {
        for (String email : recipients) {
            try {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo(email);
                message.setSubject("New Scholarship Added: " + scholarship.getScholarname());
                message.setText(buildEmailBody(scholarship));
                mailSender.send(message);
            } catch (Exception e) {
                System.err.println("Failed to send email to " + email + ": " + e.getMessage());
            }
        }
    }
	private String buildEmailBody(scholarInfo scholarship) {
        return "Hello,\n\nA new scholarship has been added to the portal:\n\n" +
                "Name: " + scholarship.getScholarname() + "\n" +
                "Eligibility: " + scholarship.getEligibility() + "\n" +
                "Amount: $" + scholarship.getAmount() + "\n" +
                "Deadline: " + scholarship.getDeadline() + "\n\n" +
                "Visit the portal to learn more and apply!\n\nThank you.";
    }

}
