import { useEffect } from 'react';

export default function useHandleStreamResponse({ onChunk, onFinish }) {
  return async function handleStreamResponse(response) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      result += chunk;
      if (onChunk) onChunk(chunk);
    }

    if (onFinish) onFinish(result);
  };
}
