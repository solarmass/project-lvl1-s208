#!/usr/bin/env node
import processGame from '../games-logic/calc';
import { printWelcome } from '../common';

printWelcome();
processGame(3);
