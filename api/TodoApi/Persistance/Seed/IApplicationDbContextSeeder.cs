﻿using System.Threading.Tasks;

namespace TodoApi.Persistance.Seed
{
    public interface IApplicationDbContextSeeder
    {
        Task SeedAsync();
    }
}