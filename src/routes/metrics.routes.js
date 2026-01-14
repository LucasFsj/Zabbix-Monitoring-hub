const express = require('express');

const router = express.Router();

router.get('/metrics', (req, res) => {
  const mem = process.memoryUsage();

  const uptimeSeconds = Math.floor(process.uptime());
  const safeUptime = Number.isFinite(uptimeSeconds) ? uptimeSeconds : 0;

  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime_seconds: safeUptime,
    memory_rss_bytes: mem.rss,
    memory_heap_total_bytes: mem.heapTotal,
    memory_heap_used_bytes: mem.heapUsed
  });
});

module.exports = router;