using System.Linq;
using Todo.Application.Common.Interfaces;
using Todo.Tests.Infrastructure.Provider;
using Xunit;

namespace Todo.Tests.Infrastructure
{
    public class TodosInMemoryTestsShould
    {
        private readonly IApplicationDbContext _context;

        public TodosInMemoryTestsShould()
        {
            _context = ApplicationDbContextInMemoryProvider.GetInMemoryContext();
        }

        [Fact]
        public void ListTodos()
        {
            // Act
            var todos = _context.Todos.ToList();

            // Assert
            Assert.NotEmpty(todos);
        }

        [Fact]
        public void ToggleTodo()
        {
            // Arrange
            var todo = _context.Todos.First();

            // Act
            todo.Toogle();
            _context.SaveAsync().Wait();
            var todoById = _context.Todos.Find(todo.Id);

            // Assert
            Assert.True(todoById.Completed);
        }

        [Fact]
        public void DeleteTodo()
        {
            // Arrange
            var todo = _context.Todos.First();

            // Act
            _context.Todos.Remove(todo);
            _context.SaveAsync().Wait();
            var todoById = _context.Todos.Find(todo.Id);

            // Assert
            Assert.Null(todoById);
        }
    }
}
