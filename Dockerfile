# ---------- 1. Build stage ----------
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy only package manifest, install deps
COPY package.json ./
RUN npm install

# Copy rest & build
COPY . .
RUN npm run build

# ---------- 2. Runtime stage ----------
FROM node:20-alpine AS runner
RUN apk add --no-cache dumb-init
WORKDIR /app

COPY --from=builder /app/.next            ./.next
COPY --from=builder /app/public           ./public
COPY --from=builder /app/package.json     ./package.json
COPY --from=builder /app/next.config.js*  ./
COPY --from=builder /app/node_modules     ./node_modules

ENV NODE_ENV=production
EXPOSE 3000
CMD ["dumb-init", "npm", "start"]
