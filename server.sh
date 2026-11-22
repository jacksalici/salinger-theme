export IPADDR="$(ipconfig getifaddr en0)"
# Hugo needs the postcss binary installed by `npm install` in the theme root.
export PATH="$(pwd)/node_modules/.bin:$PATH"
cd example-site

hugo server --buildDrafts --bind $IPADDR --baseURL http://$IPADDR -t ../..