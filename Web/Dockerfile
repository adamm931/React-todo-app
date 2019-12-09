# Build note app
# Get node base image
FROM node:12.2.0-alpine
WORKDIR /app/ClientApp

#Copy package.json
COPY ./ClientApp/package.json /app/ClientApp/package.json
RUN npm install
RUN npm install react-scripts@3.0.1

COPY ./ClientApp/ .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

# Build .net core app
# FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build-env
# WORKDIR /app

# Copy csproj and restore as distinct layers
# COPY *.csproj ./
# RUN dotnet restore

# Copy everything else and build
# COPY . ./
# RUN dotnet publish -c Release -o publish

# Build runtime image
# FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
# WORKDIR /app
# COPY --from=build-env /app/out .
# ENTRYPOINT ["dotnet", "aspnetapp.dll"]