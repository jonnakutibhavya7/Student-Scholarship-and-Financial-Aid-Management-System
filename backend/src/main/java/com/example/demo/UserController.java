package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.model.UserManager;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "https://scholar-ship-omega.vercel.app/")
public class UserController {

	@Autowired
	UserManager UM;
	
	@PostMapping("/signup")
	public String signup(@RequestBody User u)
	{
		return UM.addUser(u);
	}
	
	@GetMapping("/login/{un}/{pass}")
    public String validateLogin(@PathVariable("un")String username,@PathVariable("pass")String password)
    {
		System.out.println(username+""+password);
		return UM.login(username,password);
    }
	
}
