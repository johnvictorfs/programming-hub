namespace ProgrammingHubApi.Models
{
    public class Comment
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public string Content { get; set; }
        public long AuthorId { get; set; }
    }
}