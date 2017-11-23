#!/usr/bin/env node
import processGame from '../games-logic/even';
import { printWelcome } from '../common';

printWelcome();
processGame(3);
