FROM ruby:2.3

RUN gem install sass

RUN mkdir /www/
RUN mkdir /www/static

VOLUME /www/static/

WORKDIR /www/static/

ENTRYPOINT ["sass", "--watch", "src/index.sass:css/index.css"]
