package com.example.demo.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;
@Repository
public interface UserRepo extends JpaRepository<User, Long>{
	
	@Query("select count(u) from User u where u.email=:uname and u.password=:pass")
	public int validateLogin(@Param("uname") String uname,@Param("pass") String pass);
	@Query("SELECT u.email FROM User u WHERE u.email IS NOT NULL")
    List<String> findAllEmails();

}
