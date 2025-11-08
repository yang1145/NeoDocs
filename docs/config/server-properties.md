# Server.properties 配置详解

`server.properties` 是 Minecraft 服务器最重要的配置文件之一，它控制着服务器的基本行为和网络设置。

## 配置项说明

### 基础设置

#### server-port
```
默认值: 25565
```
服务器监听的端口号。如果运行多个服务器实例，需要为每个实例设置不同的端口。

#### server-ip
```
默认值: (空)
```
服务器绑定的IP地址。留空表示绑定到所有可用的网络接口。

#### online-mode
```
默认值: true
```
启用正版验证。设置为 `true` 时，只有正版 Minecraft 账户才能连接服务器。

#### motd
```
默认值: A Minecraft Server
```
服务器在客户端显示的消息（Message of the Day），支持颜色代码。

#### white-list
```
默认值: false
```
启用白名单模式。设置为 `true` 时，只有白名单中的玩家才能加入服务器。

### 世界设置

#### level-name
```
默认值: world
```
世界存档的名称和文件夹名。

#### level-type
```
默认值: DEFAULT
```
世界类型，可选值包括：
- DEFAULT (默认)
- FLAT (超平坦)
- LARGE_BIOMES (巨型生物群系)
- AMPLIFIED (放大化)
- CUSTOMIZED (自定义)

#### generator-settings
```
默认值: (空)
```
用于自定义世界生成的设置，通常以 JSON 格式表示。

#### allow-nether
```
默认值: true
```
是否允许进入下界。

#### announce-player-achievements
```
默认值: true
```
当玩家获得成就时是否公告。

### 游戏机制

#### gamemode
```
默认值: 0
```
默认游戏模式：
- 0: 生存模式
- 1: 创造模式
- 2: 冒险模式
- 3: 旁观模式

#### difficulty
```
默认值: 1
```
游戏难度：
- 0: 和平
- 1: 简单
- 2: 普通
- 3: 困难

#### pvp
```
默认值: true
```
是否允许玩家间 PvP 战斗。

#### enable-pvp
```
默认值: true
```
是否启用 PVP 功能。

#### hardcore
```
默认值: false
```
极限模式。启用后死亡会被封禁。

### 网络和性能

#### max-players
```
默认值: 20
```
服务器最大玩家数量。

#### max-world-size
```
默认值: 29999984
```
世界的最大尺寸。

#### view-distance
```
默认值: 10
```
玩家的视距，数值越大客户端越流畅，但服务器负载越高。

#### simulation-distance
```
默认值: 10
```
服务器模拟实体的距离。

#### network-compression-threshold
```
默认值: 256
```
网络压缩阈值，单位为字节。

### 其他设置

#### enable-query
```
默认值: false
```
是否启用 GameSpy4 查询功能。

#### enable-rcon
```
默认值: false
```
是否启用远程控制台（RCON）。

#### sync-chunk-writes
```
默认值: true
```
是否同步写入区块数据。

#### op-permission-level
```
默认值: 4
```
OP 权限等级：
- 1: 豁免者
- 2: 管理员
- 3: 开发者
- 4: 控制台

## 推荐配置示例

### 小型私人服务器
```properties
# 基础设置
server-port=25565
online-mode=true
motd=\u00A7a我的私人服务器\u00A7r
white-list=true

# 世界设置
level-name=world
level-type=DEFAULT
allow-nether=true

# 游戏机制
gamemode=0
difficulty=2
pvp=false
hardcore=false

# 网络和性能
max-players=10
view-distance=8
simulation-distance=8

# 其他设置
enable-rcon=false
op-permission-level=4
```

### 公共生存服务器
```properties
# 基础设置
server-port=25565
online-mode=true
motd=\u00A7b欢迎来到公共生存服务器\u00A7r
white-list=false

# 世界设置
level-name=world
level-type=LARGE_BIOMES
allow-nether=true
announce-player-achievements=true

# 游戏机制
gamemode=0
difficulty=2
pvp=true
hardcore=false

# 网络和性能
max-players=50
view-distance=10
simulation-distance=10

# 其他设置
enable-rcon=true
op-permission-level=4
```

## 注意事项

1. 修改配置文件后需要重启服务器才能生效
2. 某些配置项可能因服务端核心不同而有所差异
3. 建议在修改前备份原始配置文件
4. 不要随意修改不了解作用的配置项