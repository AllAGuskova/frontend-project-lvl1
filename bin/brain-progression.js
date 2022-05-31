#!/usr/bin/env node
import { game, showRules } from '../games/progression.js';

import { runGame } from '../src/index.js';

runGame(game, showRules);
