using GitExplorer.Dto;
using GitExplorer.Services.Interfaces;
using GitExplorer.Shared;

namespace GitExplorer.Services
{
    public class BookmarkService : IBookmarkService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ISession _session;

        public BookmarkService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _session = _httpContextAccessor.HttpContext!.Session;
        }

        public void AddBookmark(RepositoryDto repo)
        {
            var bookmarks = _session.GetObject<List<RepositoryDto>>("bookmarks") ?? new List<RepositoryDto>();

            if (!bookmarks.Any(r => r.Name == repo.Name))
            {
                bookmarks.Add(repo);
                _session.SetObject("bookmarks", bookmarks);
            }
        }

        public List<RepositoryDto> GetBookmarks()
        {
            return _session.GetObject<List<RepositoryDto>>("bookmarks") ?? new List<RepositoryDto>();
        }
    }

}
