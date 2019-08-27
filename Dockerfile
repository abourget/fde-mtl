FROM alpine:edge

RUN apk --no-cache add tini git openssh-client \
    && apk --no-cache add --virtual devs tar curl

# Install Caddy Server and some middleware
RUN curl "https://caddyserver.com/download/linux/amd64?plugins=http.git,http.prometheus,http.realip&license=personal&telemetry=on" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy

RUN mkdir /tmp/hugopkg; curl -L "https://github.com/gohugoio/hugo/releases/download/v0.57.2/hugo_0.57.2_Linux-64bit.tar.gz" | tar -vxzf - -C /tmp/hugopkg && mv /tmp/hugopkg/hugo /usr/bin/hugo && rm -rf /tmp/hugopkg

# All these are pulled through `caddy`'s `http.git` plugin now.
#ADD ./config.yaml /app/config.yaml
#ADD ./archetypes /app/archetypes
#ADD ./content /app/content
#ADD ./i18n /app/i18n
#ADD ./layouts /app/layouts
#ADD ./public /app/public
#ADD ./static /app/static
#ADD ./themes /app/themes
# ADD ./hugo /usr/bin/hugo
#RUN cd /app; /usr/bin/hugo
#ADD ./Caddyfile /etc/Caddyfile

ENTRYPOINT ["/sbin/tini"]

CMD ["caddy", "--conf", "/etc/Caddyfile"]
