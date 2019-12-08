using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Todo.Domain.Common;
using Todo.Infrastructure.Common;

namespace Todo.Infrastructure.Extensions
{
    public static class EntityExtensions
    {
        public static void IsAuditable<TAuditable>(this EntityTypeBuilder<TAuditable> builder)
            where TAuditable : AuditableEntity
        {
            builder
                .HasKey(model => model.Id);

            builder
                .Property(model => model.Id)
                .HasColumnName(Columns.Id);

            builder
                .Property(prop => prop.CreatedOn)
                .HasColumnName(Columns.CreatedOn);

            builder
                .Property(prop => prop.ModifiedOn)
                .HasColumnName(Columns.ModifiedOn);
        }
    }
}
