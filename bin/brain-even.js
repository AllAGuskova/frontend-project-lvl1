#!/usr/bin/env node
import { game, showRules } from '../games/even.js';

import { runGame } from '../src/index.js';

runGame(game, showRules);
