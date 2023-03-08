
package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class service {
	@Autowired
	repository rep1;
	public Optional<ToDo> getStudent(int id){
		return rep1.findById(id);
	}
	
	public String delStudent(int id){
		
		rep1.deleteById(id);
		return "Deleted";
	}

	public String update(ToDo a) {
		return "Updated";
	}


}