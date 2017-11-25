#!/usr/bin/env node
import process from '../games-logic/balance';
import { printWelcome } from '../common';

printWelcome();
process();
