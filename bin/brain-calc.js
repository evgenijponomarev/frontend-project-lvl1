#! /usr/bin/env node

import cli from '../src/cli.js';
import play from '../src/games/brain-calc.js';

const userName = cli.greeting();

play(userName);
