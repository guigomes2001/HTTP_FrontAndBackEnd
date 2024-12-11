document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCriarUser');
    const buttonGetUsers = document.getElementById('buttonGet');
    const buttonHideList = document.getElementById('buttonHide');
    const formGetById = document.getElementById('formGetById');
    const formDeleteById = document.getElementById('formDeleteById');
    const usersList = document.getElementById('usersList');

    // Função para alternar a visibilidade da lista de usuários
    function toggleVisibility() {
        usersList.classList.toggle('hidden');
    }

    // Formulário de cadastro de usuário
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio tradicional do formulário

        // Coleta os dados do formulário
        const formData = {
            name: document.getElementById('criarUsuario').value,
            age: document.getElementById('idade').value,
            nationality: document.getElementById('nacionalidade').value
        };

        // Envia os dados via Fetch API como JSON
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }
            return response.json();
        })
        .then(data => {
            alert('Usuário cadastrado com sucesso!');
            console.log(data); // Processa a resposta do servidor, se necessário
        })
        .catch(error => {
            alert('Erro ao cadastrar usuário!');
            console.error(error);
        });
    });

    // Botão HTTP - GET para mostrar usuários
    buttonGetUsers.addEventListener('click', function() {
        // Realiza a requisição GET para obter todos os usuários
        fetch('/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Exibe os dados no console

            // Limpa a lista antes de preenchê-la
            usersList.innerHTML = '';

            // Preenche a lista com os dados recebidos
            data.forEach(user => {
                const userItem = document.createElement('li');
                userItem.textContent = ` Nome: ${user.name}, Idade: ${user.age}, Nacionalidade: ${user.nationality}`;
                usersList.appendChild(userItem);
            });

            // Exibe a lista de usuários
            toggleVisibility();
        })
        .catch(error => {
            alert('Erro ao buscar usuários!');
            console.error(error);
        });
    });

    // Botão para esconder a lista de usuários
    buttonHideList.addEventListener('click', function() {
        toggleVisibility();
    });

	// Buscar usuário por ID
	formGetById.addEventListener('submit', function(e) {
	    e.preventDefault(); // Impede o envio tradicional do formulário

	    const userId = document.getElementById('userIdSearch').value; // Obtém o ID do usuário

	    // Verifica se o ID foi fornecido
	    if (!userId) {
	        alert('Por favor, informe o ID do usuário.');
	        return;
	    }

	    // Realiza a requisição GET para obter todos os usuários
	    fetch('/users', {
	        method: 'GET',
	        headers: {
	            'Content-Type': 'application/json'
	        }
	    })
	    .then(response => {
	        if (!response.ok) {
	            throw new Error('Erro ao buscar usuários');
	        }
	        return response.json();
	    })
	    .then(data => {
	        console.log(data); // Exibe os dados no console

	        // Busca o usuário com o ID fornecido na resposta
	        const user = data.find(user => user.id == userId);

	        if (!user) {
	            alert('Usuário não encontrado');
	            return;
	        }

	        // Limpa a lista antes de preencher com o usuário encontrado
	        usersList.innerHTML = '';

	        // Preenche a lista com o usuário encontrado
	        const userItem = document.createElement('li');
	        userItem.textContent = `ID: ${user.id}, Nome: ${user.name}, Idade: ${user.age}, Nacionalidade: ${user.nationality}`;
	        usersList.appendChild(userItem);

	        // Exibe a lista de usuários
	        toggleVisibility();
	    })
	    .catch(error => {
	        alert('Erro ao buscar usuário!');
	        console.error(error);
	    });
	});

    // Buscar e excluir usuário por ID
    formDeleteById.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio tradicional do formulário
        
        const userID = document.getElementById('userIdDelete').value; // Obtém o ID do usuário
        
        // Verifica se o ID foi fornecido
        if (!userID) {
            alert("Por favor, informe o ID a ser excluído.");
            return;
        }
        
        // Realiza a requisição DELETE para excluir o usuário pelo ID
        fetch(`/users/${userID}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('ID informado não corresponde a nenhum usuário ou houve um erro ao excluir.');
            }
            alert("Usuário excluído com sucesso.");
        })
        .catch(error => {
            alert('Erro ao excluir usuário ou usuário não encontrado!');
            console.error(error);
        });
    });
});

formUpdateUser.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio tradicional do formulário

    const formData = {
        name: document.getElementById('criarUsuario').value,       
        age: document.getElementById('idade').value,              
        nationality: document.getElementById('nacionalidade').value,
    };

    // Construindo a URL com o userId
    const userId = document.getElementById('atualizarUsuario').value;
    const url = `/user/${userId}`;

    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar usuário");
        }
        return response.json();
    })
    .then(data => {
        console.log('Usuário atualizado com sucesso:', data);
        alert('Usuário atualizado com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao atualizar o usuário.');
    });
});
