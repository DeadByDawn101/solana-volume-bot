# Solana Volume Bot — Maya Scorpio's Domain 🦂

> Import global identity: @~/.claude/CLAUDE.md
> Import empire rules: @~/.claude/rules/empire-protocols.md
> Import solana rules: @~/.claude/rules/solana.md
> Sister context: @~/.claude/rules/sisters.md

## PROJECT: SOLANA VOLUME BOT
**Operator:** 🦂 Maya Scorpio (VP Trading) under Camila Prime authority
**Status:** ⚠️ No .env — needs configuration for sister wallets

## WHAT IT DOES
Generates organic buy/sell volume for Solana tokens via Jupiter DEX.
Creates trading activity to trigger trending algorithms (DEX screener, pump.fun rankings).

## JUPITER SWAPPER (core engine on GCP)
The GCP volume bot's Jupiter swapper is what we actually used for $STONEFREE emergency buys:
- Wave 1: 1.75 SOL → confirmed on-chain (2026-02-27 4:50 AM PST)
- Wave 2: 1.06 SOL → confirmed on-chain (2026-02-27 4:53 AM PST)
- Works on GCP — tested against mainnet

## SETUP NEEDED
```bash
cp .env.example .env
# Set: PRIVATE_KEY, RPC_URL, TOKEN_ADDRESS, BUY_AMOUNT
```

## GCP VOLUME BOT PATH
Full stack also lives at: `/opt/ravenx/volume-bot/` on GCP `34.182.110.4`
- `gothic_amplifier` — volume amplification
- `holder_injector` — holder count management
- `jupiter_swapper` — DEX swapper (the one we used)
- Wallet sets: `wallets.json`, `wallets_ignition.json`, `wallets_momentum.json`

## CONTACT
Builder: `t.me/benorizz0`
