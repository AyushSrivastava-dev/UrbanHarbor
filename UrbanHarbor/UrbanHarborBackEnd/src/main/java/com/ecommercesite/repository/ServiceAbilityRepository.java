package com.ecommercesite.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommercesite.entities.Pincode;


public interface ServiceAbilityRepository extends JpaRepository<Pincode, String> {
	List<Pincode> findByPincode(String pincode);

}