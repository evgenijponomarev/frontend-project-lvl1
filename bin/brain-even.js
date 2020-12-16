#! /usr/bin/env node

import cli from '../src/cli.js';
import brainEven from '../src/brain-even.js';

const userName = cli.welcomeUser();

brainEven.startGame(userName);
