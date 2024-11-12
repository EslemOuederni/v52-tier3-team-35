This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Prisma ORM

This project uses [Prisma](https://prisma.io) as an ORM. You can find the Prisma schema in `prisma/schema.prisma`.

To get started, start a local postgres server, create a database and call it SunCityLA.
An example of the connection URL is in the `.example.file` file.

Once the database is set up, run the following command to create some test data:

```bash
npm run prisma:update
```

```bash
npm run prisma:seed
```

To view data in the database, run:

```bash
npm run prisma:studio
```

The Prisma Client must be updated everytime there is a change to the models.
To generate the Prisma client, run:

```bash
npm run prisma:generate
```

Migrations are used to update the database schema.
To run a migration, run:

```bash
npm run prisma:migrate
```
