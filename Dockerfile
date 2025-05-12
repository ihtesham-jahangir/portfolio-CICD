# ---------- 1. Build stage ----------
    FROM node:20-alpine AS builder

    # Recommended system packages
    RUN apk add --no-cache libc6-compat
    
    # Set working dir
    WORKDIR /app
    
    # Install deps separately to leverage Docker layer cache
    COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
    RUN \
      if [ -f package-lock.json ]; then npm ci; \
      elif [ -f pnpm-lock.yaml ];   then corepack enable && pnpm install --frozen-lockfile; \
      else yarn install --frozen-lockfile; fi
    
    # Copy source & build
    COPY . .
    RUN npm run build        # ↳ generates .next, etc.
    
    # ---------- 2. Runtime stage ----------
    FROM node:20-alpine AS runner
    
    # Smallest possible footprint
    RUN apk add --no-cache dumb-init
    WORKDIR /app
    
    # Copy built assets & only the files the server needs
    COPY --from=builder /app/.next              ./.next
    COPY --from=builder /app/public             ./public
    COPY --from=builder /app/package.json       ./package.json
    COPY --from=builder /app/next.config.js*    ./ 
    COPY --from=builder /app/node_modules       ./node_modules
    
    ENV NODE_ENV=production
    # Next defaults to port 3000; Azure passes PORT env var
    EXPOSE 3000
    CMD ["dumb-init", "npm", "start"]
    
