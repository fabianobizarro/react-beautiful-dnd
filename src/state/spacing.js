import type { Position, Spacing } from '../types';

export const add = (spacing1: Spacing, spacing2: Spacing): Spacing => ({
  top: spacing1.top + spacing2.top,
  left: spacing1.left + spacing2.left,
  right: spacing1.right + spacing2.right,
  bottom: spacing1.bottom + spacing2.bottom,
});

export const isEqual = (spacing1: Spacing, spacing2: Spacing): boolean => (
  spacing1.top === spacing2.top &&
  spacing1.right === spacing2.right &&
  spacing1.bottom === spacing2.bottom &&
  spacing1.left === spacing2.left
);

export const offset = (spacing: Spacing, position: Position): Spacing => ({
  top: spacing.top + position.y,
  right: spacing.right + position.x,
  bottom: spacing.bottom + position.y,
  left: spacing.left + position.x,
});
