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

- Figma [layout](https://www.figma.com/file/6oYOVwDVbQ8pqAHxMIzq6L/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Ignite?type=design&t=BM62LUMkmgXf528f-0)

Create the project with [Next.js](https://nextjs.org/learn/basics/create-nextjs-app/setup):
```sh
npx create-next-app@latest web --use-npm
```

Install the dependencies:
```sh
npm i lucide-react
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

- Expo

Create the project:
```sh
npx create-expo-app mobile
```

Go to the project and change it to Typescript:
```sh
cd mobile
mv App.js App.tsx
```

Install the dependencies:
```sh
npm i nativewind
```

Install the development dependencies:
```sh
npm i tailwindcss -D
npm i eslint @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
```

Create the [Tailwindcss](https://www.nativewind.dev/quick-starts/expo) config:
```sh
npx tailwindcss init
```

Start the project:
```sh
npm run start
```

[Notion](https://efficient-sloth-d85.notion.site/NLW-12-Spacetime-02e2ac5c92674f849638f9040a624652)