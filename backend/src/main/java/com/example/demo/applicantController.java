package com.example.demo;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ApplicantManager;

import com.example.demo.model.applicantInfo;
import com.example.demo.model.scholarInfo;
import com.example.demo.model.scholarManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/applicantInfo")

@CrossOrigin(origins = "https://scholar-ship-omega.vercel.app/")
public class applicantController {
	@Autowired
	ApplicantManager AM;
	
	
	
	@PostMapping("/studentinfo")
	public String studentinfo(@RequestBody applicantInfo AI){
		return AM.addapplicantInfo(AI);
	}
	@Autowired
	scholarManager SM;
	@PostMapping("/dashboard")
	public String scholarShip(@RequestBody scholarInfo SI) {
		return SM.addscholarInfo(SI);
	}
	
    
	
	@GetMapping("/getdata")
	public List<scholarInfo> getMethodName() {
		return SM.getdata();
	}
	
	
}
