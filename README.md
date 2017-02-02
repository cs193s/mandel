# mandel

FROM node:alpine
RUN apk add --no-cache git
RUN git clone https://github.com/cs193s/mandel.git ./mandel
EXPOSE 8080
CMD node mandel/server.js
