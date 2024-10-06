using Microsoft.EntityFrameworkCore;

namespace TransportService.Infrastructure;

public class TransportServiceDbContext : DbContext
{
    public TransportServiceDbContext(DbContextOptions<TransportServiceDbContext> options)
        : base(options) { }
}
