package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ToDo {
	@Id
	private int Id;
	private String Name;
	private String EmploymentTYPE;
	private int Salary;
	private int YearsOfWorking;	
	
	public int getId() {
		return Id;
	}
	public ToDo() {
		super();
	}
	public ToDo(int id, String name, String employmentTYPE, int salary, int yearsOfWorking) {
	super();
	Id = id;
	Name = name;
	EmploymentTYPE = employmentTYPE;
	Salary = salary;
	YearsOfWorking = yearsOfWorking;
}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getEmploymentTYPE() {
		return EmploymentTYPE;
	}
	public void setEmploymentTYPE(String employmentTYPE) {
		EmploymentTYPE = employmentTYPE;
	}
	public int getSalary() {
		return Salary;
	}
	public void setSalary(int salary) {
		Salary = salary;
	}
	public int getYearsOfWorking() {
		return YearsOfWorking;
	}
	public void setYearsOfWorking(int yearsOfWorking) {
		YearsOfWorking = yearsOfWorking;
	}
	
}