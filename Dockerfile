FROM node:bullseye-slim as base

RUN mkdir /app
WORKDIR /app

FROM base as deps

COPY package.json package-lock.json ./
RUN npm install --production=false

# Only the production dependancies
FROM base as production-deps

COPY package.json package-lock.json ./
COPY --from=deps /app/node_modules /app/node_modules
RUN npm prune --production

# Build the app (minifying too)
FROM base as build

COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN npm run build

# Final production build
FROM base
ENV NODE_ENV=production

RUN apt-get upgrade

COPY package.json package-lock.json host.js ./
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

CMD ["npm", "run", "deploy"]
