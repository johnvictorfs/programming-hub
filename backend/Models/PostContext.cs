using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class PostContext : DbContext
    {
        public PostContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }
    }
}