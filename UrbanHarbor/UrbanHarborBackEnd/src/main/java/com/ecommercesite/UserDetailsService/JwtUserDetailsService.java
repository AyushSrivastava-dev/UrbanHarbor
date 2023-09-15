package com.ecommercesite.UserDetailsService;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommercesite.entities.Users;
import com.ecommercesite.model.UserDto;
import com.ecommercesite.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userRepo;

	@Autowired
	@Lazy
	private PasswordEncoder passwordCryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = userRepo.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("Username: " + username+" is not available");
		}
		return new org.springframework.security.core.userdetails
				.User(user.getUsername(), user.getPassword(),new ArrayList<>());
	}

	//To save the new user's registration credentials
	public Users saveNewUser(UserDto user) {
		Users newUser = new Users();
		newUser.setPassword(passwordCryptEncoder.encode(user.getPassword()));//To store encrypted password in database.
		newUser.setFirstname(user.getFirstname());
		newUser.setLastname(user.getLastname());
		newUser.setUsername(user.getUsername());
		return userRepo.save(newUser);
	}
}


