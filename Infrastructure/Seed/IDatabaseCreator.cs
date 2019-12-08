using System.Threading.Tasks;

namespace Todo.Infrastructure.Seed
{
    public interface IDatabaseCreator
    {
        Task<bool> EnsureCreatedAsync();
    }
}