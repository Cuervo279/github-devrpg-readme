# 🎮 GitHub Dev RPG Card

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

```markdown
![Dev RPG Card](https://github-devrpg-readme.vercel.app/api/card?user=cuervo279)
