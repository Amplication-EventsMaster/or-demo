using Microsoft.EntityFrameworkCore;

namespace EventManagementService.Infrastructure;

public class EventManagementServiceDbContext : DbContext
{
    public EventManagementServiceDbContext(
        DbContextOptions<EventManagementServiceDbContext> options
    )
        : base(options) { }
}
