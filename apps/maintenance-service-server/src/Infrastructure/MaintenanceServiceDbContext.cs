using Microsoft.EntityFrameworkCore;

namespace MaintenanceService.Infrastructure;

public class MaintenanceServiceDbContext : DbContext
{
    public MaintenanceServiceDbContext(DbContextOptions<MaintenanceServiceDbContext> options)
        : base(options) { }
}
