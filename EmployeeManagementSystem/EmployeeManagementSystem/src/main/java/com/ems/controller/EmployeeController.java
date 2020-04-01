package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.model.Employee;
import com.ems.repository.EmployeeRepository;

@RestController
@RequestMapping("api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
@GetMapping("/employees")	
public List<Employee> findAllEmployees(){
	return employeeRepository.findAll();
		
}
	
	

}
