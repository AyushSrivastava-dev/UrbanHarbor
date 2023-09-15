package com.ecommercesite.UserDetailsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommercesite.entities.Price;
import com.ecommercesite.repository.PriceRepository;

@Service
public class PriceService {
	@Autowired
	private PriceRepository priceRepository;
	
	public List<Price> getPrices(){
		//To find all the products prices.
		return priceRepository.findAll();
		}
}
