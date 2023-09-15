package com.ecommercesite.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pincode {

	@Id
	private String pincode;
	private String noOfDays; //To store the delivery time(Which is usually in days).
	
	public Pincode() {
		super();
		
	}
	public Pincode(String pincode, String noOfDays) {
		super();
		this.pincode = pincode;
		this.noOfDays = noOfDays;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getNoOfDays() {
		return noOfDays;
	}
	
	
}

