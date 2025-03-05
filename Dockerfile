FROM node:22-alpine AS builder
WORKDIR /bundle
COPY package*.json ./
RUN npm install --prefer-offline --pure-lockfile --non-interactive --production=false
COPY . .
RUN npm run build

FROM node:lts-alpine
RUN mkdir -p /usr/share/nginx/personal-landing-page
WORKDIR /usr/share/nginx/personal-landing-page
COPY --from=builder /bundle/package*.json ./
RUN NODE_ENV=production npm install --pure-lockfile --non-interactive --production=true
COPY --from=builder /bundle/.output ./.output
COPY --from=builder ./bundle/nginx.node.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["node", "./.output/server/index.mjs"]