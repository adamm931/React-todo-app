# Base
FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /app

# Copy csproj files
COPY ./Application/Todo.Application.csproj ./Application/Todo.Application.csproj
COPY ./Domain/Todo.Domain.csproj ./Domain/Todo.Domain.csproj
COPY ./Infrastructure/Todo.Infrastructure.csproj ./Infrastructure/Todo.Infrastructure.csproj
COPY ./Web/Todo.Web.csproj ./Web/Todo.Web.csproj

# Restore
RUN dotnet restore ./Web/Todo.Web.csproj

# Copy all
COPY . .

# Publish
FROM build as publish
WORKDIR /app
RUN dotnet publish ./Web/Todo.Web.csproj -c Release -o out

# Npm
FROM node:12.2.0-alpine as node
WORKDIR /app
COPY ./Web/ClientApp/package.json ./package.json
RUN npm install
COPY ./Web/ClientApp ./
RUN npm run build

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-alpine
WORKDIR /app

RUN apk add --update nodejs npm

COPY --from=publish /app/out ./
COPY --from=node /app ./ClientApp

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["dotnet", "Todo.Web.dll"]