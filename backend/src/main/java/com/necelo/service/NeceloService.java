package com.necelo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.necelo.model.Card;
import com.necelo.model.Payment;
import com.necelo.repository.CardRepository;
import com.necelo.repository.PaymentRepository;

@Service
public class NeceloService {
	@Autowired
	private CardRepository cardsRepository;
	@Autowired
	private PaymentRepository paymentRepository;

	private String generateId = UUID.randomUUID().toString();

	public List<Card> getAllCards() {
		List<Card> cardsList = new ArrayList<>();
		cardsRepository.findAll().forEach(v -> {
			cardsList.add(v);
		});
		return cardsList;
	}

	public Card getCardDetails(String id) {
		return cardsRepository.findById(id).get();
	}

	public void addCardDetails(Card cardDetails) {
		// Adding generated ID to add this card details to Card table
		cardDetails.setCardId(generateId);

		// Doing the payments list to 0 size so that it will not be null when we call in
		// next api calls
		cardDetails.setPayments(new ArrayList<>());

		cardsRepository.save(cardDetails);
	}

	public void updateCardDetails(String id, Payment paymentDetails) {
		Card cardData = cardsRepository.findById(id).get();

		// Adding generated ID to add this payment detail to Payment table
		paymentDetails.setPaymentId(generateId);
		paymentRepository.save(paymentDetails);

		// Adding payment data to cards list to maintain partial payments history
		List<Payment> paymentsList = cardData.getPayments();
		paymentsList.add(paymentDetails);
		cardData.setPayments(paymentsList);
		cardsRepository.save(cardData);
	}

	public void deleteCard(String id) {
		cardsRepository.deleteById(id);
	}
}
