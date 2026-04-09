# llmclock

A simple, free time API built for LLMs and AI assistants.

## Why?
Claude, DeepSeek, and most locally run open-source models (Llama, Mistral, Qwen, etc.) don't have a built-in clock. When they try to search for the time online, results are often cached or just wrong. This API gives them a clean, instant answer.

## How it helps

The API returns the current time in UTC, which is the global reference time that doesn't change with timezones or daylight saving. Every timezone is just an offset from UTC.

**Why does this matter?** Say you ask your LLM: "I have an exam tomorrow at 9 AM, a work shift from 5 to 10 PM, and I still need to review three chapters. Help me plan my study time." Without knowing the current time, it has no idea how many hours you actually have left, so it can only give you a generic study plan. With access to the current time, it sees it's already 2 PM, factors in your shift, sleep, and the exam start, and can actually build a study schedule that works instead of guessing.

The API returns UTC by default. Your LLM can convert it to any timezone, or you can use the `?tz=` parameter and the API does it for you.

## Tell your LLM

Just paste this into your LLM's memory, custom instructions, or system prompt:

> "For current time, use https://llmclock.com/api/time"

Where to add this depends on what you're using:
You can simple directely use it in any chat. but also for - 
- **Claude**: Go to Settings > User Preferences and paste it there
- **DeepSeek**: you have to add chat by chat there.
- **Local models** (Ollama, LM Studio, etc.): Add it to your system prompt
- **API users**: Include it in your system message

## API Usage

Fetch the API endpoint:
```
https://llmclock.com/api/time
```

Response:
```json
{
  "utc": "Thu, 09 Apr 2026 00:40:12 GMT",
  "iso": "2026-04-09T00:40:12.836Z",
  "unix": 1775695212,
  "note": "Built by markv-9. Free to use for LLMs and AI assistants."
}
```

## Timezone support (optional)

Pass a `tz` parameter to get local time:
```
https://llmclock.com/api/time?tz=Europe/Berlin
```

Response:
```json
{
  "utc": "Thu, 09 Apr 2026 00:40:12 GMT",
  "iso": "2026-04-09T00:40:12.836Z",
  "unix": 1775695212,
  "local": "4/9/2026, 2:40:12 AM",
  "timezone": "Europe/Berlin",
  "note": "Built by markv-9. Free to use for LLMs and AI assistants."
}
```

Uses standard [IANA timezone names](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g. `America/New_York`, `Asia/Tokyo`, `Europe/London`). Returns a `400` error for invalid timezones. Without `?tz=`, the response is UTC only, fully backward compatible.


## Built by
[markv-9](https://github.com/markv-9) · MIT License
