import { observable } from 'mobx';
import { IQuote } from './types';

export const Quotes = observable.array<IQuote>([]);
