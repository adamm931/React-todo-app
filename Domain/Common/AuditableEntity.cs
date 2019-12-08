using System;

namespace Todo.Domain.Common
{
    public abstract class AuditableEntity
    {
        protected AuditableEntity()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; private set; }

        public DateTime CreatedOn { get; private set; }

        public DateTime? ModifiedOn { get; private set; }

        public void SetCreatedOn(DateTime createdOn)
        {
            CreatedOn = createdOn;
        }

        public void SetModifiedOn(DateTime modifiedOn)
        {
            ModifiedOn = modifiedOn;
        }
    }
}