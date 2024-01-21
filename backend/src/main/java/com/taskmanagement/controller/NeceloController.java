package com.taskmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanagement.dao.CardsData;
import com.taskmanagement.dao.response.CardsResponse;
import com.taskmanagement.service.NeceloService;

@RestController("/api")
public class NeceloController {
	@Autowired
	private NeceloService neceloService;

	@GetMapping("/get_all_cards")
	private List<CardsData> getAllCards() {
		return neceloService.getAllCards();
	}

	@GetMapping("/get_card_details")
	private CardsData getCardDetails(@RequestParam String id) {
		return neceloService.getCardDetails(id);
	}

	@PostMapping("/add_card")
	private void addCard(@RequestBody CardsData cardDetails) {
		neceloService.addCardDetails(cardDetails);
	}

	@PutMapping("/update_card_details")
	private void updateCardDetails(@RequestParam String id, @RequestBody CardsData cardDetails) {
		neceloService.updateCardDetails(id, cardDetails);
	}

	@DeleteMapping("/delete_card")
	private void deleteCard(@RequestParam String id) {
		neceloService.deleteCard(id);
	}
}
