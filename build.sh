#!/bin/bash

# Variables de entorno
Environment=$1
S3WebBucket=$2
CloudFront=$3

echo "=== Instalación ==="
echo "install"

# Instalación y configuración de AWS CLI
pip3 install awscli --upgrade --user
export CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token --domain dev-it-palaceresorts --domain-owner 427784172992 --query authorizationToken --output text)
echo $CODEARTIFACT_AUTH_TOKEN

# Copia el archivo .env dependiendo del entorno y lo muestra
cp .env.$ENVIRONMENT .env
cat .env

# Instala pnpm y dependencias
npm install -g pnpm
pnpm install --no-frozen-lockfile

echo "=== Pre-build ==="
# Comentar o descomentar para pruebas (en este caso, comentado)
# pnpm test

echo "=== Build ==="
# Configuración de opciones de memoria de Node
export NODE_OPTIONS=--max-old-space-size=6666

# Compila el proyecto
pnpm build

# Listado de archivos de dist
ls -l
ls -l ./dist

# Verificación de index.html en dist
echo "Validando si existe index.html"
if ! [ -f "dist/index.html" ]; then
  echo "No existe index.html"; 
  exit 1
fi

# Fecha del despliegue
echo $(date +'%Y/%m/%d-%R')

# Crea una carpeta de respaldo con el build generado en S3
aws s3 sync ./dist "${S3WebBucket}$(date +'%Y-%m-%d:%R')"

# Sincronización de archivos en S3 y eliminación de los diferentes al origen
aws s3 sync ./dist "${S3WebBucket}current" --delete

# Invalidación de cache de CloudFront
echo "Invalidando cache de Cloudfront"
aws cloudfront create-invalidation --distribution-id "$CloudFront" --paths '/*'

echo "Build y despliegue completados exitosamente."
