FROM node:22-slim AS build

WORKDIR /app

LABEL name="build"

COPY package.json .
COPY package-lock.json .
COPY src ./src
COPY tsconfig.json .

CMD [ "npm run buid" ]

FROM node:22-slim AS production

WORKDIR /usr/app

LABEL name="production"

COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/dist ./dist
COPY /prisma ./prisma

ENV NODE_ENV="production"

RUN npm ci

RUN npx prisma generate

ENTRYPOINT [ "npm", "start" ]