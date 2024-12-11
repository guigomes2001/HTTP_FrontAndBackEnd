package com.users;

public class UsersResponseMessage {

	private String message;
	
	public UsersResponseMessage(String message) {
		this.message=message;
	}
	
	public String getMessage() {return message;}
	public void setMessage(String message) {this.message=message;}
}
