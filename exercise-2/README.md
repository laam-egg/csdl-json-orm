# Exercise 2 - Prisma x Express

## After cloning this project

Create a new `.env` file and write in:

```txt
DATABASE_URL="mysql://username:password@localhost:3306/classicmodels"
```

Note that do NOT create `.env` file with PowerShell's `echo`
command, or you may run into an "Environment variable not
found" error while running Prisma commands below
([reference](https://stackoverflow.com/a/73945630/13680015)).

Then run:

```sh
cd exercise-2
npm install
npx prisma generate
```

## To turn the server on

Run:

```sh
npm run dev
```

## Demo

![Demo image](./demo.png)

## Troubleshooting

## Prisma Error P3017: The migration ... could not be found

This error may occur when the following command
is run:

```sh
npx prisma migrate resolve --applied ...
```

Solution: Change encoding of file
`migrations/.../migration.sql` to `UTF-8`.

On Windows, this means to open that file Notepad,
then navigate to File > Save As, change encoding
to UTF-8 in the Encoding box previous to the
Save button.

Source: <https://github.com/prisma/prisma/issues/17558#issuecomment-1410856229>
