# 🎮 GitHub Dev RPG Card

![Dev RPG Card](https://github.com/Cuervo279/github-devrpg-readme/blob/main/rpgcard.png)

Transforme seu perfil do GitHub em um personagem de RPG. 

Esta API gera automaticamente um card SVG dinâmico com suas estatísticas de desenvolvedor, nível, classe e guilda baseado nos dados públicos do GitHub.

## 🚀 Como funciona

A API coleta dados da **GitHub GraphQL API** e calcula um sistema de progressão inspirado em RPG. 

**Alguns dos dados utilizados:**
* Commits
* Repositórios
* Stars
* Followers
* Linguagens mais usadas

**Esses dados geram:**
* 🎯 **Level**
* ⚡ **XP**
* 🏆 **Tier**
* 🧙 **Classe de desenvolvedor**
* 🏰 **Guilda tecnológica**

---

## 📦 Como usar

Adicione o card diretamente no seu `README.md` utilizando a URL abaixo:

`https://github-devrpg-readme.vercel.app/api/card?user=SEU_USUARIO`

### Exemplo:

```
![Dev RPG Card](https://github-devrpg-readme.vercel.app/api/card?user=cuervo279)
```
## 🧠 Sistema de Level

O level é calculado a partir de uma pontuação composta que valoriza diferentes aspectos do seu perfil:

$$score = \text{commits} + (\text{repos} \times 3) + (\sqrt{\text{followers} \times 5} \times 20) + (\sqrt{\text{stars}} \times 2)$$

**Level e XP:**
* **Level:** `score / 50`
* **XP:** `score % 50` (progresso para o próximo nível)

---

## 🏆 Tiers

| Tier | Level |
| :--- | :--- |
| **Bronze** | 0+ |
| **Silver** | 5+ |
| **Gold** | 10+ |
| **Platinum** | 20+ |
| **Diamond** | 40+ |
| **Legendary** | 80+ |

---

## ⚔️ Classes de Desenvolvedor

A classe é definida dinamicamente pelas linguagens predominantes no seu perfil:

* **Frontend Knight:** JavaScript / TypeScript
* **Data Wizard:** Python / R / Julia
* **Systems Warrior:** Go / Rust / C++
* **Enterprise Paladin:** Java / C# / PHP

---

## 🧩 Tecnologias Utilizadas

* **Node.js** (Runtime)
* **GitHub GraphQL API** (Data source)
* **SVG Rendering** (Visual engine)
* **Serverless Functions** (Vercel)

---

## 🌐 Endpoint

`GET /api/card?user=<github_username>`

**Exemplo de requisição:**
`https://github-devrpg-readme.vercel.app/api/card?user=cuervo279`

**Retorno:**
* `Content-Type: image/svg+xml`

---

## 🎯 Objetivo do Projeto

Criar uma forma visual e divertida de representar a jornada de um desenvolvedor, gamificando métricas reais de contribuição e aprendizado.

## 📜 Licença

Este projeto está sob a licença [MIT](./LICENSE).
