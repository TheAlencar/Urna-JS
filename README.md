# 🗳️ Urna Eletrônica Simples

Um projeto prático de uma urna eletrônica de votação desenvolvido para fins didáticos. O sistema permite votar em dois candidatos, exibe os resultados em tempo real com barras de progresso visuais e mantém os dados salvos mesmo se a página for atualizada.

---

## 🚀 Funcionalidades

* **Votação em Tempo Real:** Clique para votar no Candidato 1 ou Candidato 2.
* **Cálculo de Porcentagem:** O sistema calcula automaticamente a fatia de votos de cada candidato, evitando erros de divisão por zero.
* **Barras de Progresso Dinâmicas:** Feedback visual que cresce conforme o candidato recebe mais votos.
* **Persistência de Dados (Anti-Refresh):** Os votos são salvos no `LocalStorage` do navegador, ou seja, dar F5 na página não apaga os dados.
* **Reinicialização:** Botão para limpar o banco de dados local e zerar a urna.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando o trio fundamental do desenvolvimento web, sem frameworks externos:

* **HTML5:** Estruturação dos elementos e painéis.
* **CSS3:** Design moderno, layout responsivo e transições suaves nas barras.
* **JavaScript (Vanilla):** Manipulação de estado, lógica matemática, escuta de eventos do DOM e integração com `LocalStorage`.

---

## 📂 Como testar o projeto localmente

Como o projeto utiliza apenas JavaScript puro, você não precisa instalar nenhuma dependência (como Node.js). 

1. **Clone o repositório:**
```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
