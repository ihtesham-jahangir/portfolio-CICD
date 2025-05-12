#!/bin/bash

# ---------- CONFIGURATION ----------
ACR_NAME="nextjs2f5aa50a"
REGISTRY="$ACR_NAME.azurecr.io"
IMAGE_NAME="nextjs-app"
IMAGE_TAG="v1"
WEBAPP_NAME="nextjs-web-b48035"
RESOURCE_GROUP="nextjs-rg"
FULL_IMAGE="$REGISTRY/$IMAGE_NAME:$IMAGE_TAG"

# ---------- SCRIPT START ----------
echo "🔐 Logging into ACR: $REGISTRY"
az acr login --name $ACR_NAME

echo "🏷️  Tagging local image as $FULL_IMAGE"
docker tag $IMAGE_NAME:latest $FULL_IMAGE

echo "📤 Pushing image to ACR..."
docker push $FULL_IMAGE

echo "🔁 Updating Azure Web App to use $FULL_IMAGE"
az webapp config container set \
  --name $WEBAPP_NAME \
  --resource-group $RESOURCE_GROUP \
  --docker-custom-image-name "$FULL_IMAGE" \
  --docker-registry-server-url "https://$REGISTRY" \
  --docker-registry-server-user $(az acr credential show -n $ACR_NAME --query username -o tsv) \
  --docker-registry-server-password $(az acr credential show -n $ACR_NAME --query passwords[0].value -o tsv)

echo "🔄 Restarting Web App..."
az webapp restart \
  --name $WEBAPP_NAME \
  --resource-group $RESOURCE_GROUP

echo "✅ Deployment complete!"
echo "🌐 Visit: https://$WEBAPP_NAME.azurewebsites.net"
