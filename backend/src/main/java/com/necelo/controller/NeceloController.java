package com.necelo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.necelo.model.Card;
import com.necelo.model.Payment;
import com.necelo.service.NeceloService;

@RestController("/api")
public class NeceloController {
	@Autowired
	private NeceloService neceloService;

	@GetMapping("/get_all_cards")
	private List<Card> getAllCards() {
		return neceloService.getAllCards();
	}

	@GetMapping("/get_card_details")
	private Card getCardDetails(@RequestParam String id) {
		return neceloService.getCardDetails(id);
	}

	@PostMapping("/add_card")
	private void addCard(@RequestBody Card cardDetails) {
		neceloService.addCardDetails(cardDetails);
	}

	@PutMapping("/payment")
	private void updateCardPaymentDetails(@RequestParam String id, @RequestBody Payment paymentDetails) {
		neceloService.updateCardDetails(id, paymentDetails);
	}

	@DeleteMapping("/delete_card")
	private void deleteCard(@RequestParam String id) {
		neceloService.deleteCard(id);
	}
}
