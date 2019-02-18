package com.springangular.exception;

import java.util.Date;

public class ErrorDetails {
	
	private Date timeStamp;
	private String message;
	private String details;
	
	
	public ErrorDetails(Date date, String message, String details) {
		super();
		this.timeStamp = date;
		this.message = message;
		this.details = details;
	}


	public Date getDate() {
		return timeStamp;
	}


	public String getMessage() {
		return message;
	}


	public String getDetails() {
		return details;
	}
	
	

}
