package com.ecommercesite.UserDetailsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommercesite.entities.Product;
import com.ecommercesite.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<Product> getProducts() {
		return productRepository.findAll();
	}

	public List<Product> findByProductCode(String productCode) { //To find the product by code.
		return productRepository.findByProductCode(productCode);
	}

	public List<Product> findByBrand(String brand) { //To find the product by brand.
		return productRepository.findByBrand(brand);
	}
	public List<Product> searchProducts(String productName) { //To find the product by Name.
		return productRepository.searchProducts(productName);
	}

}