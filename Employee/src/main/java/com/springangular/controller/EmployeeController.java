package com.springangular.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springangular.exception.ResourceNotFoundException;
import com.springangular.model.Employee;
import com.springangular.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {

		return employeeRepository.findAll();
	}

	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> findEmployeeById(@PathVariable(value = "id") Long employeeId)
			throws ResourceNotFoundException {

		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee with id " + employeeId + " not found"));

		return ResponseEntity.ok().body(employee);
	}

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {

		return employeeRepository.save(employee);
	}

	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long employeeId,
			@RequestBody Employee employeeDetails) throws ResourceNotFoundException {

		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id  " + employeeId));

		employee.setFirstName(employeeDetails.getFirstName());
		employee.setEmail(employeeDetails.getEmail());
		employee.setLastName(employeeDetails.getLastName());

		final Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/employee/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId)
			throws ResourceNotFoundException {

		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id  " + employeeId));

		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
