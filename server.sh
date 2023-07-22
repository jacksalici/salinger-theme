export IPADDR="$(ipconfig getifaddr en0)"
cd example-site

hugo server --buildDrafts --bind $IPADDR --baseURL http://$IPADDR -t ../..