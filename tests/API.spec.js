import {test, expect} from '@playwright/test';
const faker = require('faker');

function generateRandomAdm() {
    const genders = [true, false];
    return faker.random.arrayElement(genders);
  }

// Função para obter o ID do último usuário
async function getLastUserId(request) {
    const response = await request.get(`${apiBaseUrl}`);
    expect(response.status()).toBe(200);

    const users = await response.json();
    
    // Verifica se a lista de usuários não está vazia
    if (users.length > 0) {
        const lastUserIndex = users.length - 1; // Índice do último usuário na lista
        lastUserId = users[lastUserIndex]._id; // Extrai o ID do último usuário

        console.log("ID do último usuário:", lastUserId);
    } else {
        console.log("Não há usuários na lista.");
    }
}

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const fullName = firstName + " " + lastName
const email = faker.internet.email();
const password = faker.internet.password();
const adm = generateRandomAdm().toString();
let lastUserId; 


// Variável para URLs da API
const apiBaseUrl = 'https://serverest.dev/usuarios';

test('Api POST request', async ({ request }) => {
    const response = await request.post(`${apiBaseUrl}`, {
        data: {
            "nome": fullName,
            "email": email,
            "password": password,
            "administrador": adm
        }
    });

    expect(response.status()).toBe(201); // Validação esperada - "Cadastro realizado com sucesso"

    const text = await response.text();
    expect(text).toContain('Cadastro realizado com sucesso');

    console.log(await response.json());
});

test('Api PUT request using lastUserId', async ({ request }) => {
    // Garante que lastUserId tenha sido definido corretamente
    if (lastUserId !== undefined) {
        const response = await request.put(`${apiBaseUrl}/${lastUserId}`, {
            data: {
                // Seus dados para atualização aqui
            }
        });

        expect(response.status()).toBe(200);

        const text = await response.text();
        expect(text).toContain('Registro alterado com sucesso');

        console.log(await response.json());
    }
});

// Teste para obter o ID do último usuário
test('Api GET Request id', async ({ request }) => {
    // Chama a função para obter o ID do último usuário antes de fazer a requisição GET
    await getLastUserId(request);

    // Garante que lastUserId tenha sido definido corretamente
    if (lastUserId !== undefined) {
        const response = await request.get(`${apiBaseUrl}/${lastUserId}`);

        // Verifica se o status da resposta é 200
        expect(response.status()).toBe(200);

        // Extrai o texto da resposta para verificar se o nome do usuário está presente
        const text = await response.text();
        expect(text).toContain(fullName);

        console.log(await response.json());
    } else {
        console.log("lastUserId é undefined. Verifique o teste 'Api GET Request id'.");
    }
});

// Teste para exclusão de um usuário específico por ID
test('Api DELETE request', async({request}) => {
    // Garante que lastUserId tenha sido definido corretamente
    if (lastUserId !== undefined) {
        const response = await request.delete(`${apiBaseUrl}/${lastUserId}`);

        // Verifica se o status da resposta é 200
        await expect(response.status()).toBe(200);

        // Verifica se a mensagem de exclusão está presente no corpo da resposta
        const text = await response.text();
        await expect(text).toContain('Registro excluído com sucesso | Nenhum registro excluído');
    } else {
        console.log("lastUserId é undefined. Verifique o teste 'Api GET Request id'.");
    }
});