package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class controller {
	@Autowired
	repository repo;
	
	@Autowired
	service ser;
	
	@GetMapping("/get")
	List<ToDo> getList(){
		return repo.findAll();
	}
	@GetMapping("/getValues/{id}")
	public Optional<ToDo> getbyid(@PathVariable int id){
		return ser.getStudent(id);
	}

	
	@PostMapping("/post")
	public ToDo create (@RequestBody ToDo a) {
		return repo.save(a);
	}
	
	@DeleteMapping("/delete")
	public String delete(@RequestParam int id) {
		return ser.delStudent(id);
	}
	@PutMapping("/put")
	public String update(@RequestBody ToDo a) {
		return ser.update(a);
	}
} 