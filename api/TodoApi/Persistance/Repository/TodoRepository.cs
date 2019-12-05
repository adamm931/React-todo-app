using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Domain.Common;
using TodoApi.Domain.Entities;
using TodoApi.Domain.Repository;

namespace TodoApi.Persistance.Repository
{
    public class TodoRepository : ITodoRepository
    {
        private readonly List<EntityState<TodoItem>> _todoState = new List<EntityState<TodoItem>>();

        private const string StoragePath = @"C:\Dev\todos.json";

        private List<TodoItem> _todos;
        private List<TodoItem> Todos => _todos ??= GetTodos();

        public void Add(string name)
        {
            AddToState(TodoItem.Create(name), EntityStateType.Added);
        }

        public void Delete(TodoItem item)
        {
            AddToState(item, EntityStateType.Deleted);
        }

        public TodoItem Get(Guid id)
        {
            return Todos.SingleOrDefault(item => item.Id == id);
        }

        public IEnumerable<TodoItem> List(FilterType filterType)
        {
            return filterType switch
            {
                FilterType.All => Todos,
                FilterType.Completed => Todos.Where(todo => todo.Completed),
                FilterType.Uncompeted => Todos.Where(todo => !todo.Completed),
                _ => Todos
            };
        }

        public async Task Save()
        {
            foreach (var item in _todoState)
            {
                var current = Todos.FirstOrDefault(todo => todo.Id == item.Entity.Id);

                if (current != null && item.StateType == EntityStateType.Updated)
                {
                    current = item.Entity;
                }
                else if (current != null && item.StateType == EntityStateType.Deleted)
                {
                    Todos.Remove(current);
                }
                else if (item.StateType == EntityStateType.Added)
                {
                    Todos.Add(item.Entity);
                }
            }

            await SaveTodos();
        }

        public void Update(TodoItem item)
        {
            AddToState(item, EntityStateType.Updated);
        }

        private void AddToState(TodoItem item, EntityStateType stateType)
        {
            var toDelete = _todoState.FirstOrDefault(state => state.Entity.Id == item.Id);

            if (toDelete != null)
            {
                toDelete.StateType = stateType;
                return;
            }

            _todoState.Add(new EntityState<TodoItem>
            {
                Entity = item,
                StateType = stateType
            });
        }

        private List<TodoItem> GetTodos()
            => JsonConvert.DeserializeObject<List<TodoItem>>(File.ReadAllText(StoragePath));

        private async Task SaveTodos()
            => await File.AppendAllTextAsync(JsonConvert.SerializeObject(Todos), StoragePath);
    }
}