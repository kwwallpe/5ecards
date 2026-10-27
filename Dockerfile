FROM node:26-slim

RUN npm install -g pnpm@12.14.0

WORKDIR /app

# Install dependencies first so this layer is cached until the lockfile changes
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 5173

# --host binds to 0.0.0.0 so the server is reachable from outside the container
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]
