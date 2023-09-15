package com.ecommercesite.repository;

import org.springframework.data.repository.CrudRepository;

import com.ecommercesite.entities.Users;

public interface UserRepository extends CrudRepository<Users, String> {
    Users findByUsername(String username);
}

