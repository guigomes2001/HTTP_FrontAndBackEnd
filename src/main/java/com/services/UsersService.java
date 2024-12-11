package com.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.users.Users;
import com.users.UsersRepository;

@Service
public class UsersService {

	@Autowired
	private UsersRepository usersRepository;
	
	//Método para criar um usuário novo 
	public void createUser(Users user) {
		usersRepository.save(user);
	}
	
	//Método para buscar todos os usuários registrados
	public List<Users> getAllUsers(){
		return usersRepository.findAll();
	}
	
	//Método para buscar um usuário por ID
	public Optional<Users> getUserById(Long id){
		Optional<Users> optionalUsers = usersRepository.findById(id);
		
		if(optionalUsers.isPresent()) {
			return optionalUsers;
		} else {
			System.out.println("User not found by id: " + id);
		}
		return optionalUsers;
	}
	
	//Método para excluir um usuário
	public void deleteUser(Long id) {
		usersRepository.deleteById(id);
	}
	
	//Método para atualizar as informações de um usuário
	public Users updateUser(Long id, Users updatedUser) {
		Users existingUser = usersRepository.findById(id)
							.orElseThrow(() -> new RuntimeException("User not find by id " + id));
		
		if(updatedUser.getName() != null) {
			existingUser.setName(updatedUser.getName());
		}
		
		if(updatedUser.getAge() != 0) {
			existingUser.setAge(updatedUser.getAge());
		}
		
		if(updatedUser.getNationality() != null) {
			existingUser.setNationality(updatedUser.getNationality());
		}
		
		return usersRepository.save(existingUser);
	}
}
