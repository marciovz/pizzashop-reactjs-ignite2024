# PIZZA SHOP

Pizza shop é um aplicativo para gerenciamento de uma pizzaria, construído durante o módulo 4 do bootcamp ignite da Rocketseat, com o objetivo de colocar em prática os conhecimentos adquiridos sobre React, comunicação com APIs via requisições HTTP, React Router DOM, React Hook Form, shadcn/ui, React Query, testes com Vitest e mais.


## Tecnologias

- Reactjs
- Vite
- Shadcn/ui
- ESLint
- Prettier
- React Router 
- React Relmet
- Sonner (toast)
- Recharts (gráficos)
- axios
- zod
- React Query
- Skeleton
- Vitest
- Testing Library
- Happy dom (alternativa jsdom)
- MSW (Mockin Service Worker)
- Playwright (end-to-end)


## Funcionalidades
- Magic link
- Gráfico Linear
- Gráfico Pizza
- Cache de requisições
- Interceptors API
- Testes unitários


## Instalação e configuração o backend da aplicação

```sh
# clonar o projeto do backend
git clone git@github.com:rocketseat-education/pizzashop-api.git

# subir um banco de dados postgres com docker
docker compose up -d

# instalar as dependências do projeto backend
bun install

# rodar as migrações do banco de dados
# obs.: adicionar qualquer caracter na variável de ambiente RESEND_API_KEY em env.local
bun migrate

# rodar o seed
# obs.: alterar o email de administrador para o seu email ou um fictício
bun seed

# rodar o backend da aplicação
bun dev
```

## Rodar Projeto

```sh
# rodar o frontend da aplicação
npm run dev
```