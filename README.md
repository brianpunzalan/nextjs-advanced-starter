# Next.js Advanced Starter

Includes Typescript, MaterialUI, Storybook, Jest, Puppeteer, ESLint, Prettier and more.

## Getting Started

First, Install dependencies

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:4040](http://localhost:4040) with your browser to see the result.

---

## VSCode

Install `vscode` tools as follows:

- ESLint `dbaeumer.vscode-eslint`
- Prettier `esbenp.prettier-vscode`
- Typescript `ms-vscode.vscode-typescript-next`
- Jest `orta.vscode-jest`

## Linting and Code Formatting

With these tools, it would automatically detect code issues and automatically suggest recommendations and format your code.
If `vscode` tools suggested above were installed, every save on files would automatically format the code based on the recommendation specificed in `.prettierrc.json`. It would also automatically detect lint errors for Typescript/Javascript specified in `.eslintrc.json`.

To run `eslint`, execute

```bash
yarn lint
```

## Test

To run `jest` test cases, execute

```bash
yarn test
```

## Storybook

To run storybook, execute

```bash
yarn storybook
```

Modify the stories on folder `/src/stories`

Configure storybook on folder `/.storybook`

By default, `DefaultTheme` theme was injected on storybook components. To change, just change the theme parameter on the `themeDecorator` on `/.storybook/preview.js`

---

## Note

### `Atomic Design`

We follow [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design) by Brad Frost. This enables us to decide how and where to put React components together.

For our case, below should summarize our expectation:

      ATOMS = /src/components
      MOLECULES = /src/components/blocks
      ORGANISMS = /src/blocks
      TEMPLATES = /src/layouts
      PAGES = /src/pages

`Atoms` are stand-alone. They should not use other `atoms`.

`Molecules` should use different `atoms` together to form a `compound`.

`Organisms` should combine different `molecules` to provide a functionality with a specific context in mind.

`Templates` should compose of `organisms` together to form a `Page`

## Deploy Options

[![Deploy to Vercel](icons/deploy-vercel.svg)](https://vercel.com/import/project?template=https://github.com/brianpunzalan/nextjs-advanced-starter)

[Vercel](https://vercel.com/docs/v2/introduction) is a cloud platform for static sites and Serverless Functions. It enables developers to host JAMstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.

**To easily deploy this starter, click the button above.** You may need to create an account with Vercel and configure your git repository access preferences. For the deploy configuration settings, just use `yarn build` for build command and `dist/.next` for output directory.
