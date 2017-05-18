#!/usr/bin/env node

import askQuestion from '..';
import { randomNumber, balancedNumber } from '../games/brain-balance'


askQuestion(randomNumber, balancedNumber);
