// src/courseActions.ts

import { createAction } from '@reduxjs/toolkit';

// Define your action creators
export const addToCart = createAction<number>('ADD_TO_CART');
export const buyNow = createAction<number>('BUY_NOW');
