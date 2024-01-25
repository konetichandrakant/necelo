package com.necelo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.necelo.model.Payment;

@Repository
public interface PaymentRepository extends CrudRepository<Payment, String>{

}
