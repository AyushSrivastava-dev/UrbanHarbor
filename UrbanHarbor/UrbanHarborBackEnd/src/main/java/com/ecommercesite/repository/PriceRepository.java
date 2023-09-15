package com.ecommercesite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommercesite.entities.Price;

public interface PriceRepository extends JpaRepository<Price, String>{

}
