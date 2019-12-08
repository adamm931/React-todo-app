using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Todo.Domain.Entities;
using Todo.Infrastructure.Common;
using Todo.Infrastructure.Extensions;

namespace Todo.Persistance.Configurations
{
    public class TodoItemConfiguration : IEntityTypeConfiguration<TodoItem>
    {
        public void Configure(EntityTypeBuilder<TodoItem> builder)
        {
            builder
                .IsAuditable();

            builder
                .ToTable(Tables.Todo);

            builder
                .Property(model => model.Completed)
                .HasColumnName(Columns.Completed);

            builder
                .Property(model => model.Name)
                .HasColumnName(Columns.Name)
                .IsRequired()
                .HasMaxLength(100);
        }
    }
}