FROM httpd:alpine
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
	sed -i '/LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
	sed -i '/LoadModule proxy_http_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
	sed -i 's#AllowOverride [Nn]one#AllowOverride All#' /usr/local/apache2/conf/httpd.conf && \
	echo '<Directory "/usr/local/apache2/htdocs">' >>/usr/local/apache2/conf/httpd.conf && \
	echo 'LogLevel alert rewrite:trace3' >>/usr/local/apache2/conf/httpd.conf && \
	echo '</Directory>' >>/usr/local/apache2/conf/httpd.conf
COPY ./dist/ /usr/local/apache2/htdocs/
EXPOSE 80
