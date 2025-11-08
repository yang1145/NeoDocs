# 性能优化指南

优化 Minecraft 服务器性能对于提供流畅的游戏体验至关重要。本指南将介绍多种优化策略和技术。

## 硬件优化

### 内存分配

合理的内存分配对服务器性能影响巨大：

```bash
# 推荐的 JVM 参数
java -Xms4G -Xmx6G -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=4M -XX:TargetSurvivorRatio=90 -XX:G1MixedGCCountTarget=4 -XX:+PerfDisableSharedMem -XX:+UseCompressedOops -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapWastePercent=5 -XX:G1MixedGCLiveThresholdPercent=85 -jar paper.jar nogui
```

关键参数说明：
- `-Xms4G`: 初始堆内存大小
- `-Xmx6G`: 最大堆内存大小
- `-XX:+UseG1GC`: 使用 G1 垃圾回收器

### CPU 考虑

- 更多的核心数有助于并行处理任务
- 高频率 CPU 可以更快地处理单线程任务
- 建议至少四核 CPU

## 服务器配置优化

### server.properties 优化

```properties
# 降低视距以减少计算量
view-distance=8
simulation-distance=6

# 限制世界大小
max-world-size=10000

# 合理设置玩家上限
max-players=30
```

### paper.yml 优化

```yaml
# 区块系统优化
chunk-loading:
  # 减少同时加载的区块数
  player-max-concurrent-chunk-generates: 2
  player-max-concurrent-chunk-loads: 4

# 实体系统优化
entities:
  # 启用实体激活范围
  activation-range:
    enabled: true
    tick-inactive-villagers: false
    
# 怪物系统优化
spawning:
  # 限制怪物生成
  max-spawns-per-tick: 20
```

### spigot.yml 优化

```yaml
# 世界设置
world-settings:
  default:
    # 启用实体优化
    entity-activation-range:
      animals: 16
      monsters: 24
      misc: 8
      
    # 启用随机刻优化
    random-light-updates: false
    
    # 合理设置视距
    view-distance: 8
```

## 插件优化

### 选择高质量插件

1. 选择活跃维护的插件
2. 查看插件评价和用户反馈
3. 避免功能重复的插件
4. 定期更新插件版本

### 插件配置优化

常见的优化配置：

```yaml
# 清理闲置实体
entity-cleanup:
  enabled: true
  interval: 600
  remove-unloaded: true

# 限制特定实体生成
spawn-limits:
  monsters: 50
  animals: 10
  water-animals: 5
  ambient: 1
```

## 世界优化

### 世界边界设置

使用 WorldEdit 或 WorldBorder 插件设置合理的世界边界：

```
# WorldBorder 插件命令
/wb set 5000
/wb fill 5000
```

### 定期清理

定期执行以下清理操作：

1. 清理掉落物品
2. 移除闲置实体
3. 删除废弃的区块
4. 优化数据库

## 监控和诊断

### 使用监控插件

推荐使用的监控插件：
- Spark: 性能分析工具
- Timings: 原生性能监控
- Plan: 玩家统计和服务器性能监控

### 关键指标监控

需要关注的重要指标：
- TPS (Ticks Per Second): 应保持在 20
- MSPT (Milliseconds Per Tick): 应低于 50ms
- 内存使用情况
- 玩家在线时的资源消耗

### 性能分析命令

```
# Spark 插件性能分析
/spark profiler start
/spark profiler stop

# 原生 Timings 分析
/timings on
/timings paste
```

## 网络优化

### 带宽管理

- 确保足够的上行带宽
- 使用网络压缩
- 限制不必要的网络传输

### 防火墙和端口转发

确保正确配置：
1. 防火墙规则
2. 路由器端口转发
3. DDOS 防护

## 数据库优化

如果有使用数据库的插件：

### MySQL 优化

```ini
# my.cnf 配置优化
innodb_buffer_pool_size = 1G
innodb_log_file_size = 256M
query_cache_size = 128M
```

### SQLite 优化

对于小型服务器，SQLite 也是不错的选择：
- 简单易用
- 单文件存储
- 低并发下性能良好

## 实际案例

### 案例一：小型社区服务器

配置：
- 8GB 内存，4 核 CPU
- 20 名平均在线玩家
- 优化结果：TPS 稳定在 20

优化措施：
1. 将 view-distance 从 10 降到 8
2. 启用实体激活范围
3. 安装自动清理插件
4. 调整 JVM 参数

### 案例二：中型公开服务器

配置：
- 16GB 内存，8 核 CPU
- 50 名平均在线玩家
- 优化结果：TPS 保持在 19.5 以上

优化措施：
1. 使用 Paper 服务端
2. 配置专用 MySQL 数据库
3. 启用异步处理
4. 实施世界边界和区块清理

## 常见问题和解决方案

### TPS 下降

可能原因及解决方案：
1. 实体过多 → 安装实体清理插件
2. 玩家过多 → 增加硬件配置或限制在线人数
3. 插件冲突 → 逐个排查插件性能
4. 世界过大 → 实施世界边界

### 内存溢出

解决方案：
1. 调整 JVM 内存参数
2. 检查是否有内存泄漏插件
3. 启用垃圾回收优化参数
4. 定期重启服务器释放内存

### 网络延迟高

解决方案：
1. 检查网络带宽和稳定性
2. 优化地理位置接近的服务器节点
3. 启用网络压缩
4. 减少不必要的数据传输

## 总结

性能优化是一个持续的过程，需要：
1. 定期监控服务器状态
2. 根据实际情况调整配置
3. 保持插件和服务器核心更新
4. 与玩家社区沟通收集反馈

记住，没有一种通用的最优配置，最适合您的服务器的配置取决于具体的硬件条件、玩家数量和游戏玩法。