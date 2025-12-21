# Aceternity UI Components

This folder contains copy-paste components from [Aceternity UI](https://ui.aceternity.com/).

## How to Add Components

1. Visit https://ui.aceternity.com/components
2. Choose a component
3. Copy the code
4. Create a new file here with the component name
5. **Important**: Replace `framer-motion` imports with `motion/react`

## Example:

If copying TypewriterEffect:

- Create: `typewriter-effect.tsx`
- Update imports:

  ```tsx
  // Change from:
  import { motion } from 'framer-motion';

  // To:
  import { motion } from 'motion/react';
  ```

## Recommended Components for Portfolio

- [ ] TypewriterEffect (Hero section)
- [ ] MovingBorder (Buttons)
- [ ] BentoGrid (Skills layout)
- [ ] CardContainer (Projects)
- [ ] Timeline (Experience)
- [ ] TextGenerateEffect (Animated text)
- [ ] BackgroundBeams (Hero background)
- [ ] SparklesCore (Decorative elements)

## Usage

```tsx
import { ComponentName } from '@/components/aceternity/component-name';

<ComponentName {...props} />;
```
