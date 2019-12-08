using Todo.Domain.Entities;
using Xunit;

namespace Todo.Tests.Domain
{
    public class TodoItemShould
    {
        [Fact]
        public void CreateTodoItem()
        {
            // Arrange
            var name = "Some name";

            // Act
            var todo = TodoItem.Create(name);

            // Assert
            Assert.Equal(todo.Name, name);
            Assert.False(todo.Completed);
            Assert.Null(todo.ModifiedOn);
        }

        [Fact]
        public void ToogleTodoItem()
        {
            // Arrange
            var todo = TodoItem.Create("some name");
            var isCompletedBeforeToogle = todo.Completed;

            // Act
            todo.Toogle();
            var isCompletedAftetToogle = todo.Completed;

            // Assert
            Assert.False(isCompletedBeforeToogle);
            Assert.True(isCompletedAftetToogle);
        }
    }
}
