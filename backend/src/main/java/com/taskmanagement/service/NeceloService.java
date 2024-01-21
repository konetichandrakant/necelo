package com.taskmanagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskmanagement.dao.CardsData;
import com.taskmanagement.model.Card;
import com.taskmanagement.repository.CardRepository;

@Service
public class NeceloService {
	@Autowired
	private CardRepository cardsRepository;

	private String generateId() {
		return java.util.UUID.randomUUID().toString();
	}

	private CardsData changeCardDetails(Card data) {
		CardsData cardData = new CardsData();
		cardData.setDueDate(data.getDueDate());
		cardData.setId(data.getId());
		cardData.setTitle(data.getId());
		cardData.setPaid(data.isPaid());
		cardData.setAmount(data.getAmount());
		return cardData;
	}

	private Card changeCardDetails(CardsData data) {
		Card cardData = new Card();
		cardData.setDueDate(data.getDueDate());
		cardData.setId(data.getId());
		cardData.setTitle(data.getId());
		cardData.setPaid(data.isPaid());
		cardData.setAmount(data.getAmount());
		return cardData;
	}

	public List<CardsData> getAllCards() {
		List<CardsData> cardsList = new ArrayList<>();
		cardsRepository.findAll().forEach(v -> {
			cardsList.add(changeCardDetails(v));
		});
		return cardsList;
	}

	public CardsData getCardDetails(String id) {
		Card cardData = cardsRepository.findById(id).get();
		if (cardData == null)
			return null;
		return changeCardDetails(cardData);
	}

	public void addCardDetails(CardsData cardDetails) {
		cardDetails.setId(generateId());
		Card cardData = changeCardDetails(cardDetails);
		cardsRepository.save(cardData);
	}

	public void updateCardDetails(String id, CardsData cardDetails) {
		Card cardData = cardsRepository.findById(id).get();
		cardData.setDueDate(cardDetails.getDueDate());
		cardData.setPaid(cardDetails.isPaid());
		cardData.setAmount(cardDetails.getAmount());
		cardData.setTitle(cardDetails.getTitle());
		cardsRepository.save(cardData);
	}

	public void deleteCard(String id) {
		cardsRepository.deleteById(id);
	}
}
