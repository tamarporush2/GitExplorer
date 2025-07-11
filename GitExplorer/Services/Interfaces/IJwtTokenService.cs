namespace GitExplorer.Services.Interfaces
{
    public interface IJwtTokenService
    {
        public string GenerateToken(string username);

    }
}
