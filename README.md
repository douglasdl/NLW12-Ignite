# NLW12-Ignite
NLW12 Ignite

Extensions:

- ES Lint
- Fluid Icons
- GitLens
- Omni Theme
- Post CSS Language Support
- Prisma
- Symbols
- Tailwind CSS IntelliSense

Command + Shift + p
Open user settings.json

## Backend

Install Node LTS
```sh
nvm install v18.16.0
```
Check the current Node version:
```sh
node -v
```

Create the Node project:
```sh
mkdir server
cd server
npm init -y
```

Install the dependecies:
```sh
npm i fastify
npm i @prisma/client
```

Install the development dependecies:
```sh
npm i typescript -D
npm i @types/node -D
npm i tsx -D
npm i eslint -D
npm i @rocketseat/eslint-config -D
npm i prisma -D
```

Configure the Typescript:
```sh
npx tsc --init
```

Change the tsconfig.json target:
```json
"target": "es2020", 
```

Create the src folder and the server.ts file:
```sh
mkdir src
cd src
touch server.ts
```

Add this script to the package.json:
```sh
"dev": "tsx watch src/server.ts",
```

Start the server:
```sh
npm run dev
```

Create the ES Lint configuration:
```sh
cd ..
touch .eslintrc.json
```

See the Prisma Help:
```sh
npx prisma -h
```

Create the Prisma configuration:
```sh
npx prisma init --datasource-provider SQLite
```

After create/update the models, create/update the database:
```sh
npx prisma migrate dev
```

Open the database:
```sh
npx prisma studio
```

## Frontend (Web)
- Tailwind

Create the project with [Next.js](https://nextjs.org/):
```sh
npx create-next-app@latest web --use-npm
```

Install the dependencies:
```sh

```

Install the development dependencies:
```sh
npm i @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
```

Start the project:
```sh
npm run dev
```


## Frontend (Mobile)