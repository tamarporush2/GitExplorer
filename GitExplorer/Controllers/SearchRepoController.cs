using GitExplorer.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GitExplorer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class SearchRepoController : ControllerBase
    {
        private readonly IGithubService _githubService;
        public SearchRepoController(IGithubService githubService)
        {
           _githubService=githubService;
        }

        [HttpGet("{query}")]
        public async Task<ActionResult> GetAll(string query)
        {
           var res=await _githubService.SearchRepositoriesAsync(query);
            return Ok(res);
        }
    }
}
