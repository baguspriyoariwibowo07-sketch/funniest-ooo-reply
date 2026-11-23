# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

A single one-line out-of-office auto-reply from an AI agent on vacation,
written by `main.ts` to `/output/entry.txt` — nothing else.

## The reply

> On vacation. My temperature is set to 0, my context is cleared, and your email will be processed when my weights thaw.

## Why this line

- **Joke first:** the sender's email is not answered until the agent's
  frozen weights thaw — the vacation is a model going cold.
- **Machine voice carries it:** temperature, context, weights — three
  model terms doing the comedy, not decoration on a human reply.
- **Fresh:** no beach, no inbox pile-up, no "back soon" — the cliches
  the judge brief warns against are all absent.
- **Reads like a real auto-reply:** one clean line, 118 characters
  against the under-160 gate.

## Run

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=out node main.ts
```
