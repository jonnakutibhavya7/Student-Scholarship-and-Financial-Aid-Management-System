package com.example.demo.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.applicantInfo;
@Repository
public interface applicantRepo extends JpaRepository<applicantInfo, Long>{
	applicantInfo findByStudentId(String studentId);

}
