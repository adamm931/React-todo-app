FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /app

COPY ./Application/Todo.Application.csproj ./Application/Todo.Application.csproj
COPY ./Domain/Todo.Domain.csproj ./Domain/Todo.Domain.csproj
COPY ./Infrastructure/Todo.Infrastructure.csproj ./Infrastructure/Todo.Infrastructure.csproj
COPY ./Web/Todo.Web.csproj ./Web/Todo.Web.csproj

RUN dotnet restore ./Web/Todo.Web.csproj
COPY . .
RUN dotnet publish ./Web/Todo.Web.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app
COPY --from=build /app/out .

ENTRYPOINT ["dotnet", "Todo.Web.dll"]