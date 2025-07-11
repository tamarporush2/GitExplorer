using GitExplorer.Dto;
using GitExplorer.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GitExplorer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class BookmarkController : ControllerBase        
    {
        private readonly IBookmarkService _bookmarkService;

        public BookmarkController(IBookmarkService bookmarkService)
        {
            _bookmarkService=bookmarkService;
        }
        [HttpPost("bookmarkRepo")]
        public IActionResult BookmarkRepository([FromBody] RepositoryDto repo)
        {
            _bookmarkService.AddBookmark(repo);
            return Ok();
        }
        [HttpGet]
        public IActionResult GetAll()
        {
           var res= _bookmarkService.GetBookmarks();
            return Ok(res);
        }
    }
}
