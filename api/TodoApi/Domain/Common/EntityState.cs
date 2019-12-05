using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Domain.Common
{
    public class EntityState<TType> where TType : class
    {
        public EntityStateType StateType { get; set; }

        public TType Entity { get; set; }
    }
}