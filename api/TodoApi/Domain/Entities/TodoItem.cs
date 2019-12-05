using System;

namespace TodoApi.Domain.Entities
{
    public class TodoItem
    {
        public Guid Id { get; private set; }

        public string Name { get; private set; }

        public bool Completed { get; private set; }

        private TodoItem(string name)
        {
            Id = Guid.NewGuid();
            Name = name;
        }

        private TodoItem()
        {
        }

        public static TodoItem Create(string name)
             => new TodoItem(name);

        public void Toogle()
        {
            Completed = !Completed;
        }
    }
}