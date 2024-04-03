import { test, expect, beforeEach } from '@playwright/test';
const faker = require('faker');

function generateRandomAdm() {
    const admin = [true, false];
    return faker.random.arrayElement(admin);
}

const firstName = faker.name.firstName();
const midleName = faker.name.firstName();
const lastName = faker.name.lastName();
const fullName = firstName + " " + lastName;
const email = faker.internet.email();
const password = faker.internet.password();
const adm = generateRandomAdm().toString();
let userId;

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

    await expect(response.status()).toBe(201); // Validação esperada - "Cadastro realizado com sucesso"

    const responseData = await response.json();
    await expect(responseData.message).toContain('Cadastro realizado com sucesso');

    userId = responseData._id; // Armazena o ID do usuário criado

    console.log(responseData);
});

test('Api PUT request', async ({ request }) => {
    const postResponse = await request.post(`${apiBaseUrl}`, {
        data: {
            "nome": fullName + midleName,
            "email": email + ".us",
            "password": password,
            "administrador": adm
        }
    });

    const postReturn = await postResponse.json()
    const user = postReturn._id

    const response = await request.put(`${apiBaseUrl}/${user}`, {
        data: {
            "nome": fullName + " Talys",
            "email": email + ".br",
            "password": password + "123",
            "administrador": adm
        }
    });

    await expect(response.status()).toBe(200);

    const text = await response.text();
    await expect(text).toContain('Registro alterado com sucesso');

    console.log(await response.json());
});

// Teste para obter os dados do usuário criado
test('Api GET Request id', async ({ request }) => {
    const response = await request.get(`${apiBaseUrl}/${userId}`);

    // Verifica se o status da resposta é 200
    await expect(response.status()).toBe(200);

    // Extrai o texto da resposta para verificar se o nome do usuário está presente
    const text = await response.text();
    await expect(text).toContain(fullName);

    console.log(await response.json());
});

// Teste para exclusão de um usuário específico por ID
test('Api DELETE request', async ({ request }) => {
    const response = await request.delete(`${apiBaseUrl}/${userId}`);

    // Verifica se o status da resposta é 200
    await expect(response.status()).toBe(200);

    // Verifica se a mensagem de exclusão está presente no corpo da resposta
    const text = await response.text();
    await expect(text).toContain('Registro excluído com sucesso');
});
