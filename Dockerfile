FROM nginx:1.19.0-alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY client.crt /etc/nginx/frontend.cert
COPY client.key /etc/nginx/frontend.key

COPY /dist/client /usr/share/nginx/html
EXPOSE 443
# start app
CMD ["nginx", "-g", "daemon off;"]
