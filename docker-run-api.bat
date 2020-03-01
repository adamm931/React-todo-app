docker run -d -p 8080:80 -e "ConnectionStrings__Todos"="Server=172.17.0.2;Port=5432;Database=TodosDb;Username=postgres;Password=0905" todo_api
