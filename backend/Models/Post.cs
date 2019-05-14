namespace backend.Models
{
    public class Post
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public long AuthorId { get; set; }
    }
}