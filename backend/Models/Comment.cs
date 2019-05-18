namespace backend.Models
{
    public class Comment
    {
        public long Id { get; set; }
        public long AuthorId { get; set; }
        public string AuthorName { get; set; }
        public long PostId { get; set; }
        public long ParentId { get; set; }
        public string Content { get; set; }
    }
}