export CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token --domain dev-it-palaceresorts --domain-owner 427784172992 --query authorizationToken --output text) >> $GITHUB_ENV
echo CODEARTIFACT_AUTH_TOKEN
npm -d ping
npm install -g pnpm
pnpm install --no-frozen-lockfile
