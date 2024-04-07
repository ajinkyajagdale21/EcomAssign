import { router } from '../server';
import { hash, compare } from 'bcryptjs';
import { ValidationError } from '../utils/errors';

import { router } from '../server';
import { hash, compare } from 'bcryptjs';
import { ValidationError } from '../utils/errors';

router.mutation('signup', {
  input: (signupInput) => {
    // Validate user input (email format, password strength)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupInput.email)) {
      throw ValidationError('Invalid email format');
    }
    if (signupInput.password.length < 8) {
      throw ValidationError('Password must be at least 8 characters long');
    }
  },
  async resolve({ input }) {
    const hashedPassword = await hash(input.password, 10); // Hash password
    try {
      const user = await prisma.user.create({
        data: { ...input, password: hashedPassword },
      });
      return { user }; // Return created user object
    } catch (error) {
      // Handle Prisma errors (e.g., email uniqueness violation)
      throw ValidationError('Signup failed');
    }
  },
});

router.mutation('login', {
  input: (loginInput) => {
    // Validate login input (email format)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginInput.email)) {
      throw ValidationError('Invalid email format');
    }
  },
  async resolve({ input }) {
    const user = await prisma.user.findUnique({
      where: { email: input.email },
    });
    if (!user || !(await compare(input.password, user.password))) {
      throw ValidationError('Invalid email or password');
    }
    return { user }; // Return user object on successful login
  },
});
