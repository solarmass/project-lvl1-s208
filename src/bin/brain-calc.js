#!/usr/bin/env node
import process from '../games-logic/calc';
import { printWelcome } from '../common';

printWelcome();
process();
