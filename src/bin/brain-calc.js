#!/usr/bin/env node
import askQuestion from '..';
import { operation, getCorrectAnswer } from '../games/brain-calc'


askQuestion(operation, getCorrectAnswer());
