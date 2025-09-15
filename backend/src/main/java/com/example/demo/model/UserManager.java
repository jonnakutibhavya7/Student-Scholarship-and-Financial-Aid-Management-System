package com.example.demo.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.repository.UserRepo;

@Service
public class UserManager {

	@Autowired
	UserRepo UR;

	public String addUser(User u)
	{
		 UR.save(u);
		 
		 return "user added succefully";
	}
	

	public String login(String username,String password)
	{
		try {
			
			if(UR.validateLogin(username, password)==1)
			{
				return "Login successfull";
			}
			else
			{
				throw new Exception("----------Invalid credentials-----------");
			}
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	public List<String> getAllUserEmails() {
		 return UR.findAllEmails();
}
}
