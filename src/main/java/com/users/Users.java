package com.users;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "dados")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;

	@Column
	private int age;
	
	@Column
	private String nationality;
	
	public Users() {
		
	}
	
	public Users(Long id, String name, int age, String nationality) {
		this.id=id;
		this.name=name;
		this.age=age;
		this.nationality=nationality;
	}
	
	public Long getId() {return id;}
	public void setId(Long id) {this.id=id;}
	
	public String getName() {return name;}
	public void setName(String name) {this.name=name;}
	
	public int getAge() {return age;}
	public void setAge(int age) {this.age=age;}
	
	public String getNationality() {return nationality;}
	public void setNationality(String nationality) {this.nationality=nationality;}
}
