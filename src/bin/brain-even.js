#!/usr/bin/env node
import askQuestion from '..';
import { randomNumber, correctAnswer } from '../games/brain-even'

askQuestion(randomNumber, correctAnswer);
