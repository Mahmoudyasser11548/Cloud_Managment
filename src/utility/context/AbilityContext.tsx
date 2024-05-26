// abilityContext.tsx
import React, { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import { Permission } from '@configs/permissions';

export const AbilityContext = createContext<Permission>(new Permission());
export const Can = createContextualCan(AbilityContext.Consumer);
