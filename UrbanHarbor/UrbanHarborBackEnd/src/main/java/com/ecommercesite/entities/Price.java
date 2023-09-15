package com.ecommercesite.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Price {
	@Id
	private String productCode;
	private String price;
	
	public Price() {
		super();
	}
	
	public Price(String productCode, String price) {
		super();
		this.productCode = productCode;
		this.price = price;
	}
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	
}
