<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:f="http://java.sun.com/jsf/core" xmlns:h="http://java.sun.com/jsf/html">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Testando os métodos HTTP</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <f:view>
        <div id="container">
            <h2 id="titulo">Principais métodos HTTP para requisições</h2>
            <div id="buttonsMethods">

				<div id="containerCreateUser">
                <!-- Formulário para cadastro de usuário (POST) -->
                <form id="formCriarUser">
                    <input id="criarUsuario" name="name" placeholder="Nome completo" required>
                    <input id="idade" name="age" placeholder="Informe a idade" type="number" required>
                    <input id="nacionalidade" name="nationality" placeholder="Informe a nacionalidade" required>
                    <button id="buttonPost" type="submit">Cadastre um usuário - POST</button>
                </form>
				</div>
				
				<div id="containerUpdateUser">
                <!-- Botão método HTTP PATCH -->
                <form id="formUpdateUser">
                	<input id="atualizarUsuario" name="id" placeholder="Informe o ID" type="number" required>
                	<input id="criarUsuario" name="name" placeholder="Nome completo" required>
                    <input id="idade" name="age" placeholder="Informe a idade" type="number" required>
                    <input id="nacionalidade" name="nationality" placeholder="Informe a nacionalidade" required>
                    <button id="buttonPatch" type="submit">Atualizar usuário - PATCH /{id}</button>
                </form>
                </div>
                
				<div id="containerGetAllUsers">
                <!-- Botões HTTP GET e Esconder Lista -->
                <form id="getButtonsForm">
                    <button id="buttonGet" type="button">Buscar todos os usuários - GET</button>
                    <button id="buttonHide" type="button">Minimizar resultados</button>
                </form>
					
                <!-- Lista de usuários exibida -->
                <ul id="usersList" class="hidden">
                    <!-- A lista será preenchida dinamicamente com os dados de usuários -->
                </ul>

				</div>	
				
				<div id="containerGetById">
                <!-- Formulário para buscar usuário por ID (GET) -->
                <form id="formGetById">
                    <input id="userIdSearch" name="userId" placeholder="Informe o ID do usuário" type="number" required>
                    <button id="buttonGetById" type="submit">Buscar usuário por id - GET /{id}</button>
                </form>
				</div>
				
				<div id="containerDeleteById">
                <!-- Formulário para excluir usuário por ID (DELETE) -->
                <form id="formDeleteById">
                    <input id="userIdDelete" name="userId" placeholder="Informe o ID do usuário para excluir" type="number" required>
                    <button id="buttonDelete" type="submit">Excluir usuário - DELETE /{id}</button>
                </form>
				</div>
				
            </div>
        </div>
    </f:view>
    <script src="javascript/script.js"></script>
</body>
</html>
