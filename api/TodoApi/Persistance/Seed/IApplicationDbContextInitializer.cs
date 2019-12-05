using System.Threading.Tasks;

namespace TodoApi.Persistance.Seed
{
    public interface IApplicationDbContextInitializer
    {
        Task InitializeAsync();
    }
}