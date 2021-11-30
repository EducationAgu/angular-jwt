FROM nginx:1.19.0-alpine
COPY /dist/client /usr/share/nginx/html
EXPOSE 80
# start app
CMD ["nginx", "-g", "daemon off;"]
