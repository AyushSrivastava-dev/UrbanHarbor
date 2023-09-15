package com.ecommercesite.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ecommercesite.UserDetailsService.JwtUserDetailsService;
import com.ecommercesite.config.JwtAuthenticationUtil;
import com.ecommercesite.model.UserDto;
import com.ecommercesite.requestresponse.JwtRequest;
import com.ecommercesite.requestresponse.JwtResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtAuthenticationUtil jwtAuthenticationUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		//To authenticate the userName and userPassword.
		authenticator(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		String token = jwtAuthenticationUtil.generateToken(userDetails); //To store the generated token.

		return ResponseEntity.ok(new JwtResponse(token)); //To send back the token in response.
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDto user) throws Exception { //To save the credentials of new user.
		return ResponseEntity.ok(userDetailsService.saveNewUser(user)); 
	}

	//To validate the userName and password.
	private void authenticator(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("User is disabled", e);
		} catch (BadCredentialsException e) {
			throw new Exception("Invalid credentials", e);
		}
	}
}