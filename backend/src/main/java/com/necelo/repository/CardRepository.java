package com.necelo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.necelo.model.Card;

@Repository
public interface CardRepository extends CrudRepository<Card, String>{

}
