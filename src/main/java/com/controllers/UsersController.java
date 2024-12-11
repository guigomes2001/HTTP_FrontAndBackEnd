package com.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.services.UsersService;
import com.users.Users;
import com.users.UsersResponseMessage;

@RestController
@RequestMapping("/users")
public class UsersController {

	//Injeção de dependência dos métodos no Service
	@Autowired
	private UsersService usersService;
	
	@PostMapping()
	public ResponseEntity<?> createUser(@RequestBody Users user) {
	    System.out.println("Cadastrado usuário: " + user.getName());
	    
	    // Salve o usuário no banco de dados
	    usersService.createUser(user);

	    return ResponseEntity.ok().body(new UsersResponseMessage("Usuário cadastrado com sucesso"));
	}

	
	//Método HTTP para buscar todos os usuários registrados
	@GetMapping()
	public List<Users> getAllUsers(){
		return usersService.getAllUsers();
	}
	
	//Método HTTP para buscar um usuário por ID 
	@GetMapping("/{id}")
	public Optional<Users> getUserById(@PathVariable Long id){
		return usersService.getUserById(id);
	}
	
	//Método HTTP para excluir um usuário por ID 
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id){
		usersService.deleteUser(id);
		return ResponseEntity.noContent().build();
	}
	
	//Método HTTP para atualizar os dados de um usuário por ID
	@PatchMapping("/user/{id}")
	public ResponseEntity<Users> updateUser(@PathVariable Long id, @RequestBody Users updateUser) {
		Users updated = usersService.updateUser(id, updateUser);
		return ResponseEntity.ok(updated);
	}
}
