package com.necelo.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "card")
public class Card {
	@Id
	@Column(name = "card_id")
	private String cardId;

	@Column(name = "card_title")
	private String cardTitle;

	@Column(name = "card_amount")
	private float cardAmount;

	@Column(name = "card_due_date")
	private Date cardDueDate;

	@Column(name = "card_created_date")
	private String cardCreatedDate;

	@OneToMany
	@Column(name="card_payments")
	private List<Payment> payments;

	public String getCardId() {
		return cardId;
	}

	public void setCardId(String cardId) {
		this.cardId = cardId;
	}

	public String getCardTitle() {
		return cardTitle;
	}

	public void setCardTitle(String cardTitle) {
		this.cardTitle = cardTitle;
	}

	public float getCardAmount() {
		return cardAmount;
	}

	public void setCardAmount(float cardAmount) {
		this.cardAmount = cardAmount;
	}

	public Date getCardDueDate() {
		return cardDueDate;
	}

	public void setCardDueDate(Date cardDueDate) {
		this.cardDueDate = cardDueDate;
	}

	public String getCardCreatedDate() {
		return cardCreatedDate;
	}

	public void setCardCreatedDate(String cardCreatedDate) {
		this.cardCreatedDate = cardCreatedDate;
	}

	public List<Payment> getPayments() {
		return payments;
	}

	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}
}
