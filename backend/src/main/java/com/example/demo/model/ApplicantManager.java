package com.example.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.repository.applicantRepo;

@Service
public class ApplicantManager {
	@Autowired
	applicantRepo AR;
	public String addapplicantInfo(applicantInfo AI) {
		AR.save(AI);
		return "info saved";
	}
	 public applicantInfo getApplicantByStudentId(String studentId) {
	        return AR.findByStudentId(studentId);
	    }

}
