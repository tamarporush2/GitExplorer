using GitExplorer.Dto;

namespace GitExplorer.Services.Interfaces
{
    public interface IBookmarkService
    {
        void AddBookmark(RepositoryDto repo);
        List<RepositoryDto> GetBookmarks();
    }
}
