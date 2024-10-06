using Microsoft.EntityFrameworkCore;

namespace LoyaltyProgramService.Infrastructure;

public class LoyaltyProgramServiceDbContext : DbContext
{
    public LoyaltyProgramServiceDbContext(DbContextOptions<LoyaltyProgramServiceDbContext> options)
        : base(options) { }
}
