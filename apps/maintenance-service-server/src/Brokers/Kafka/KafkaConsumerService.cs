using MaintenanceService.Brokers.Infrastructure;
using MaintenanceService.Brokers.Kafka;
using Microsoft.Extensions.DependencyInjection;

namespace MaintenanceService.Brokers.Kafka;

public class KafkaConsumerService : KafkaConsumerService<KafkaMessageHandlersController>
{
    public KafkaConsumerService(IServiceScopeFactory serviceScopeFactory, KafkaOptions kafkaOptions)
        : base(serviceScopeFactory, kafkaOptions) { }
}
