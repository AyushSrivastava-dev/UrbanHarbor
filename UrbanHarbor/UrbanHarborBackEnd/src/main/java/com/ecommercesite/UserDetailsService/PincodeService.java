package com.ecommercesite.UserDetailsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommercesite.entities.Pincode;
import com.ecommercesite.repository.ServiceAbilityRepository;

@Service
public class PincodeService {

	@Autowired
	private ServiceAbilityRepository serviceAbilityRepository;
	
	public List<Pincode> findByPincode(String pincode) {
		
		return serviceAbilityRepository.findByPincode(pincode);
	}
}
