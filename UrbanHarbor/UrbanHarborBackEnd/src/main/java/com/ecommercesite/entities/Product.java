package com.ecommercesite.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
	
	@Id
	private String productCode;
	private String brand;
	private String name;
	//To store the image url of the product reather than actual image.
	private String imageUrl;
	private String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Product(String name, String productCode, String brand, String imageUrl, String description) {
		super();
		this.name = name;
		this.productCode = productCode;
		this.brand = brand;
		this.imageUrl = imageUrl;
		this.description = description;

	}

	public Product() {
		super();
	}

}
