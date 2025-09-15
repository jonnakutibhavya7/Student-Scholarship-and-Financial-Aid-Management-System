package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "scholarship_details")
public class scholarInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long Sid;
	String scholarname ,amount ,eligibility ,deadline ;
	public long getSid() {
		return Sid;
	}
	public void setSid(long sid) {
		Sid = sid;
	}
	public String getScholarname() {
		return scholarname;
	}
	public void setScholarname(String scholarname) {
		this.scholarname = scholarname;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getEligibility() {
		return eligibility;
	}
	public void setEligibility(String eligibility) {
		this.eligibility = eligibility;
	}
	public String getDeadline() {
		return deadline;
	}
	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}
	

}
