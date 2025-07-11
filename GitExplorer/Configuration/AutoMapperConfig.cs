using AutoMapper;
using GitExplorer.Dto;
using GitExplorer.Models;


namespace GitExplorer.Configuration
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<GitHubRepository, RepositoryDto>()
                .ForMember(dest => dest.AvatarUrl,
                           opt => opt.MapFrom(src => src.Owner.Avatar_Url))
                .ForMember(dest => dest.HtmlUrl,
                           opt => opt.MapFrom(src => src.Html_Url));
        }
    }
}
