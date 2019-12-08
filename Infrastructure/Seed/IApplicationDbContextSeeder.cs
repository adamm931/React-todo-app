using System.Threading.Tasks;

namespace Todo.Infrastructure.Seed
{
    public interface IApplicationDbContextSeeder
    {
        Task SeedAsync();
    }
}