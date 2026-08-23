import { performance } from "node:perf_hooks";

export async function measure(operation, observer = () => {}) {
  const startedAt = performance.now();

  try {
    return await operation();
  } finally {
    observer({ durationMs: performance.now() - startedAt });
  }
}
