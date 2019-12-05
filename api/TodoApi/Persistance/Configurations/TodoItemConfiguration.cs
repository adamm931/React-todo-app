using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TodoApi.Domain.Entities;

namespace TodoApi.Persistance.Configurations
{
    public class TodoItemConfiguration : IEntityTypeConfiguration<TodoItem>
    {
        public void Configure(EntityTypeBuilder<TodoItem> builder)
        {
            builder
                .HasKey(model => model.Id);

            builder
                .Property(model => model.Name)
                .IsRequired()
                .HasMaxLength(100);
        }
    }
}