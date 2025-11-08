# 快速开始

欢迎来到 Minecraft 开服指南！本指南将带领您从零开始搭建自己的 Minecraft 服务器。

## 准备工作

在开始之前，请确保您已经准备好：

- 一台运行 Windows 或 Linux 的计算机
- 至少 4GB 的可用内存
- 稳定的网络连接
- 基本的计算机操作知识

## 选择合适的服务器核心

Minecraft 服务器有不同的核心可供选择，每种都有其特点：

| 核心类型 | 特点 | 推荐用途 |
|---------|------|---------|
| Vanilla | 官方原版，稳定但无插件支持 | 小型私人服务器 |
| Paper | 高性能，支持插件，社区活跃 | 大多数服务器的首选 |
| Spigot | 老牌服务端，插件生态丰富 | 传统服务器 |
| Purpur | 基于 Paper，提供更多自定义选项 | 需要特殊定制的服务器 |

## 下载服务器核心

1. 访问 [PaperMC 官网](https://papermc.io/)
2. 选择您想要的 Minecraft 版本
3. 下载最新的构建版本

## 运行服务器

1. 创建一个新的目录用于存放服务器文件
2. 将下载的 JAR 文件放入该目录
3. 创建启动脚本（根据您的操作系统）

**Windows 启动脚本 (start.bat)**：
```batch
@echo off
java -Xms2G -Xmx4G -jar paper.jar nogui
pause
```

**Linux 启动脚本 (start.sh)**：
```bash
#!/bin/bash
java -Xms2G -Xmx4G -jar paper.jar nogui
```

4. 运行启动脚本首次启动服务器
5. 接受 Minecraft EULA（编辑 eula.txt 文件）
6. 再次启动服务器

## 配置基础设置

服务器启动后会在同目录下生成配置文件，主要包括：

- `server.properties` - 服务器基本配置
- `bukkit.yml` - Bukkit 相关配置
- `spigot.yml` - Spigot 相关配置
- `paper.yml` - Paper 相关配置

## 下一步

- 学习如何[配置服务器参数](/config/server-properties)
- 了解[性能优化技巧](/config/performance)
- 探索[常用插件推荐](/plugins/popular)