using AutoMapper;
using GitExplorer.Configuration;
using GitExplorer.Dto;
using GitExplorer.Models;
using GitExplorer.Services.Interfaces;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace GitExplorer.Services
{
    public class GithubService : IGithubService
    {
        private readonly HttpClient _httpClient;
        private readonly GitHubApiSettings _settings;
        private readonly IMapper _mapper;

        public GithubService(HttpClient httpClient,
            IOptions<GitHubApiSettings> options, IMapper mapper)
        {
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("GitHubExplorer");
            _settings = options.Value;
            _mapper = mapper;
        }

        public async Task<List<RepositoryDto>> SearchRepositoriesAsync(string query)
        {
            var fullUrl = $"{_settings.BaseUrl}?q={Uri.EscapeDataString(query)}";
            var res = await _httpClient.GetAsync(fullUrl);
            res.EnsureSuccessStatusCode();
            var json = await res.Content.ReadAsStringAsync();

            var result = JsonSerializer.Deserialize<GitHubSearchResponse>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return _mapper.Map<List<RepositoryDto>>(result.Items);
        }
    }

}
