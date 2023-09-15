package com.ecommercesite.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecommercesite.entities.Product;


public interface ProductRepository extends JpaRepository<Product, String> {

	List<Product> findByProductCode(String productCode);
	List<Product> findByBrand(String brand);

	//To search by product brand name or just the name of the product.
	@Query("select p from Product p where "+ "concat(p.brand,p.name)" + "like %?1%")
	public List<Product> searchProducts(String keyword);

}

