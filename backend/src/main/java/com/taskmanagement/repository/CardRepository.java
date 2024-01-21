package com.taskmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taskmanagement.model.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, String> {

}
