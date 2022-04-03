# Image
FROM node:14.18.1

# Set up work directory
WORKDIR /var/www/client

# Configure host
ENV HOST 0.0.0.0
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000
# Init command
CMD ["sh", "-c", "npm install -no-bin-links && npm run dev"]
