package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="applicant_personalInfo")
public class applicantInfo {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
long aid;

String firstName,middleName, lastName;
String email;
String phoneNumber;
String birthDate;
String gender;
String streetAddress ,city , state ,postalCode;
String secondaryContactName, secondaryContactPhone,secondaryContactRelation;
String schoolName;
String schoolCity,startDate, endDate,stateOfSchool;
String collageName ,studentId,course ,ispursuing,passOutDate ;
String CollegeEmail;

public String getCollegeEmail() {
	return CollegeEmail;
}
public void setCollegeEmail(String collegeEmail) {
	CollegeEmail = collegeEmail;
}
public long getAid() {
	return aid;
}
public void setAid(long aid) {
	this.aid = aid;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getMiddleName() {
	return middleName;
}
public void setMiddleName(String middleName) {
	this.middleName = middleName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhoneNumber() {
	return phoneNumber;
}
public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}
public String getBirthDate() {
	return birthDate;
}
public void setBirthDate(String birthDate) {
	this.birthDate = birthDate;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getStreetAddress() {
	return streetAddress;
}
public void setStreetAddress(String streetAddress) {
	this.streetAddress = streetAddress;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public String getPostalCode() {
	return postalCode;
}
public void setPostalCode(String postalCode) {
	this.postalCode = postalCode;
}
public String getSecondaryContactName() {
	return secondaryContactName;
}
public void setSecondaryContactName(String secondaryContactName) {
	this.secondaryContactName = secondaryContactName;
}
public String getSecondaryContactPhone() {
	return secondaryContactPhone;
}
public void setSecondaryContactPhone(String secondaryContactPhone) {
	this.secondaryContactPhone = secondaryContactPhone;
}
public String getSecondaryContactRelation() {
	return secondaryContactRelation;
}
public void setSecondaryContactRelation(String secondaryContactRelation) {
	this.secondaryContactRelation = secondaryContactRelation;
}
public String getSchoolName() {
	return schoolName;
}
public void setSchoolName(String schoolName) {
	this.schoolName = schoolName;
}
public String getSchoolCity() {
	return schoolCity;
}
public void setSchoolCity(String schoolCity) {
	this.schoolCity = schoolCity;
}
public String getStartDate() {
	return startDate;
}
public void setStartDate(String startDate) {
	this.startDate = startDate;
}
public String getEndDate() {
	return endDate;
}
public void setEndDate(String endDate) {
	this.endDate = endDate;
}
public String getStateOfSchool() {
	return stateOfSchool;
}
public void setStateOfSchool(String stateOfSchool) {
	this.stateOfSchool = stateOfSchool;
}
public String getCollageName() {
	return collageName;
}
public void setCollageName(String collageName) {
	this.collageName = collageName;
}
public String getStudentId() {
	return studentId;
}
public void setStudentId(String studentId) {
	this.studentId = studentId;
}
public String getCourse() {
	return course;
}
public void setCourse(String course) {
	this.course = course;
}
public String getIspursuing() {
	return ispursuing;
}
public void setIspursuing(String ispursuing) {
	this.ispursuing = ispursuing;
}
public String getPassOutDate() {
	return passOutDate;
}
public void setPassOutDate(String passOutDate) {
	this.passOutDate = passOutDate;
}


}