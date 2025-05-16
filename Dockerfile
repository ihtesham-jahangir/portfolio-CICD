# ---------- 1. Build stage ----------
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json and install deps
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# ---------- 2. Runtime stage ----------
FROM node:20-alpine AS runner
RUN apk add --no-cache dumb-init
WORKDIR /app

# Copy built artifacts
COPY --from=builder /app/.next            ./.next
COPY --from=builder /app/public           ./public
COPY --from=builder /app/package.json     ./package.json
COPY --from=builder /app/next.config.js*  ./
COPY --from=builder /app/node_modules     ./node_modules

# Set environment variables (adjust values as needed)
ENV NODE_ENV=production
ENV SMTP_HOST=smtp.gmail.com
ENV SMTP_PORT=465
ENV SMTP_SECURE=true
ENV SMTP_FROM="Alpha Networks" 
ENV SMTP_TO=ihteshamjahangir21@.com

# Secrets should be passed at runtime for security
# These can be set via docker run -e or Docker secrets in production

EXPOSE 3000
CMD ["dumb-init", "npm", "start"]