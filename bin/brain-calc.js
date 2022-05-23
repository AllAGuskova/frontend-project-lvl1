#!/usr/bin/env node
import { game, showRules } from '../games/calc.js';

import { runGame } from '../src/index.js';

runGame(game, showRules);
