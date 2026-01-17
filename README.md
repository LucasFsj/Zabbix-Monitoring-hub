# Zabbix Monitoring Hub (Node.js)

Template Zabbix reutilizável para monitoramento de aplicações Node.js utilizando HTTP Agent,
Dependent Items, Macros e Triggers.
Este projeto demonstra a integração entre uma API Node.js e o Zabbix, seguindo boas práticas
de monitoramento em ambientes de infraestrutura.

## 📌 Overview

O **Zabbix Monitoring Hub (Node.js)** fornece um template pronto para monitorar aplicações
Node.js por meio de endpoints HTTP expostos pela própria aplicação.

O template foi projetado para ser:
- reutilizável
- escalável
- fácil de configurar por ambiente
- livre de valores hardcoded

## ⚙️ Arquitetura
- Node.js + Express
- Zabbix HTTP Agent
- Dependent Items para extração de métricas
- Macros para parametrização por host
- Triggers para detecção de falhas e anomalias

Fluxo de coleta:
Zabbix HTTP Agent
   ├─ /api/health  → disponibilidade
   └─ /api/metrics → JSON bruto
                       ├─ Heap Used
                       ├─ RSS Memory
                       └─ Uptime
                       
## 🔌 Endpoints monitorados

A aplicação Node.js deve expor os seguintes endpoints:
- /api/health
- /api/metrics

## 📊 Métricas coletadas

- Heap Used (bytes)
- RSS Memory (bytes)
- Uptime (seconds)

## 🚨 Triggers configurados

- API Node.js is down
- Node.js heap usage is high
- Node.js application restarted

## 🧩 Macros utilizadas

{$APP.BASE_URL}
{$APP.HEALTH_PATH}
{$APP.METRICS_PATH}
{$APP.HEAP_USED_MAX}
{$APP.NODATA_SEC}
{$APP.HTTP_TIMEOUT}

## 🧪 Example Node.js Application

Este projeto utiliza uma aplicação Node.js simples como exemplo de alvo monitorado.
O foco principal do repositório é o template Zabbix, porém a API abaixo demonstra
como expor métricas compatíveis com o monitoramento.

Endpoints esperados:
GET /api/health
GET /api/metrics

## 🛠️ Como usar

1. Importe o template no Zabbix
2. Crie um Host
3. Linke o template
4. Configure {$APP.BASE_URL}

## 📦 Template

template/template-nodejs-zabbix-monitoring-hub-final.yaml

## 📄 Licença
Uso educacional e demonstrativo.

