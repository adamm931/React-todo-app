using Todo.Domain.Common;

namespace Todo.Domain.Entities
{
    public class TodoItem : AuditableEntity
    {
        public string Name { get; private set; }

        public bool Completed { get; private set; }

        private TodoItem(string name)
        {
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