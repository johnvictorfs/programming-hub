using Microsoft.EntityFrameworkCore;

namespace ProgrammingHubApi.Models
{
    public class CommentContext : DbContext
    {
        public CommentContext(DbContextOptions<CommentContext> options)
            : base(options)
        {
        }

        public DbSet<Comment> Comments { get; set; }
    }
}