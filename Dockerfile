FROM node:14-alpine3.14

# default to port 3000 for node, and 9229 and 9230 (tests) for debug
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

RUN apk add --update tini
RUN npm install -g typescript
RUN mkdir /opt/node_app && chown node:node /opt/node_app
WORKDIR /opt/node_app
USER node

COPY --chown=node:node package.json package-lock.json* ./
RUN yarn install
ENV PATH /opt/node_app/node_modules/.bin:$PATH

HEALTHCHECK --interval=30s CMD node scripts/healthcheck.js

WORKDIR /opt/node_app/app
COPY --chown=node:node . .
RUN yarn build

CMD ["/sbin/tini", "--", "yarn", "start"]