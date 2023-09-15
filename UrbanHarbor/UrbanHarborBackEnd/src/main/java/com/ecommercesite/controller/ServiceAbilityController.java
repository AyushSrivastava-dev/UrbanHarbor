package com.ecommercesite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommercesite.UserDetailsService.PincodeService;
import com.ecommercesite.entities.Pincode;

@RestController
public class ServiceAbilityController {
	
	@Autowired
	PincodeService pincodeservice;
	
	@GetMapping("/product/pincode")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<List<Pincode>> getByPincode(@RequestParam String pincode) {
		//To search a product on the basis of its pincode to tell its availability.
		System.out.println("Pincode is: "+pincode);
		return new ResponseEntity<List<Pincode>>(pincodeservice.findByPincode(pincode), HttpStatus.OK);
	}
}


