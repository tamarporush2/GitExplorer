using GitExplorer.Dto;

namespace GitExplorer.Services.Interfaces
{
    public interface IGithubService
    {
        public Task<List<RepositoryDto>> SearchRepositoriesAsync(string query);
    }
}
