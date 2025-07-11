namespace GitExplorer.Models
{
    public class GitHubSearchResponse
    {
        public List<GitHubRepository> Items { get; set; }
    }

    public class GitHubRepository
    {
        public string Name { get; set; }
        public string Html_Url { get; set; }
        public GitHubOwner Owner { get; set; }
    }

    public class GitHubOwner
    {
        public string Avatar_Url { get; set; }
    }

}
